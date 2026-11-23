(() => {
  const stats = document.getElementById('lifetimeTraffic');
  if (!stats) return;
  const cards = [...document.querySelectorAll('.game-card')];
  const number = new Intl.NumberFormat('ko-KR');
  const day = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeZone: 'UTC' });
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const dayMs = 86_400_000;

  const validCount = value => Number.isSafeInteger(value) && value >= 0;
  const parseDay = value => typeof value === 'string' && datePattern.test(value) ? Date.parse(value) : NaN;
  const hasGameMetrics = entry => validCount(entry?.activeUsers) && validCount(entry.pageViews);

  function enableSorting(ranked, period, partialCoverage) {
    const select = document.getElementById('gameSort');
    if (!select) return;

    const grid = cards[0].parentElement;
    const note = document.getElementById('rankingNote');
    const storageKey = 'playpick-home-sort';
    note.textContent = `GA4 활성 사용자 기준 · ${period}` +
      (partialCoverage ? ' · 일부 게임은 태그가 빠져 있었던 기간의 방문 기록이 적을 수 있습니다.' : '');
    select.querySelector('[value="popular"]').disabled = false;

    function setOrder() {
      const byPopularity = select.value === 'popular';
      grid.append(...(byPopularity ? ranked.map(({ card }) => card) : cards));
      note.hidden = !byPopularity;
    }

    select.addEventListener('change', () => {
      setOrder();
      try { localStorage.setItem(storageKey, select.value); } catch { /* Storage may be unavailable. */ }
    });
    try {
      if (localStorage.getItem(storageKey) === 'popular') {
        select.value = 'popular';
        setOrder();
      }
    } catch { /* Keep the default order. */ }
  }

  async function renderTraffic() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/geniuskey/lottery/ga4-stats/traffic.json', { credentials: 'omit' });
      if (!response.ok) return;
      const data = await response.json();
      if (data?.source !== 'ga4') return;
      const age = Date.now() - Date.parse(data.generatedAt);
      if (!Number.isFinite(age) || age < -dayMs || age > 7 * dayMs) return;

      const start = parseDay(data.startDate);
      const end = parseDay(data.endDate);
      if (Number.isFinite(start) && end >= start && validCount(data.site?.totalUsers) && validCount(data.site?.pageViews)) {
        stats.querySelector('#trafficPeriod').textContent = `${day.format(start)}부터 ${day.format(end)} 기준`;
        stats.querySelector('#trafficUsers').textContent = number.format(data.site.totalUsers);
        stats.querySelector('#trafficViews').textContent = number.format(data.site.pageViews);
        stats.hidden = false;
      }

      const rankingStart = parseDay(data.rankingStartDate);
      const rankingEnd = parseDay(data.rankingEndDate ?? data.endDate);
      const rankingSpan = (rankingEnd - rankingStart) / dayMs;
      if (!Number.isFinite(rankingSpan) || rankingSpan < 0 || rankingSpan > 29) return;
      const rankingPeriod = `${day.format(rankingStart)} ~ ${day.format(rankingEnd)}`;
      const ranked = cards.map(card => {
        const slug = card.getAttribute('href').slice(2, -1);
        const metrics = data.games?.[slug];
        return { card, metrics: hasGameMetrics(metrics) ? metrics : null };
      }).sort((a, b) => (b.metrics?.activeUsers ?? -1) - (a.metrics?.activeUsers ?? -1) ||
        (b.metrics?.pageViews ?? -1) - (a.metrics?.pageViews ?? -1));

      const popular = ranked.filter(({ metrics }) => metrics?.activeUsers >= 10).slice(0, 3);
      for (const { card, metrics } of popular) {
        const badge = card.querySelector('.card-badge');
        badge.title = `활성 사용자 ${number.format(metrics.activeUsers)}명 · ${rankingPeriod}`;
        badge.hidden = false;
      }
      if (ranked.some(({ metrics }) => metrics && (metrics.activeUsers || metrics.pageViews))) {
        enableSorting(ranked, rankingPeriod, parseDay(data.trackingSince) > rankingStart);
      }
    } catch {
      // The catalog stays available when the aggregate snapshot cannot load.
    }
  }

  renderTraffic();
})();
