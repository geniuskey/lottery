(() => {
  const stats = document.getElementById('lifetimeTraffic');
  if (!stats) return;
  const grid = document.querySelector('.game-grid');
  const cards = [...grid.querySelectorAll('.game-card')];
  const select = document.getElementById('gameSort');
  const note = document.getElementById('rankingNote');
  const sortKey = 'playpick-home-sort';
  const number = new Intl.NumberFormat('ko-KR');
  const day = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeZone: 'UTC' });
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const dayMs = 86_400_000;

  const validCount = value => Number.isSafeInteger(value) && value >= 0;
  const parseDay = value => typeof value === 'string' && datePattern.test(value) ? Date.parse(value) : NaN;
  const hasGameMetrics = entry => validCount(entry?.activeUsers) && validCount(entry.pageViews);

  function shuffledCards() {
    const orderKey = 'playpick-home-card-order';
    const cardsByLink = new Map(cards.map(card => [card.getAttribute('href'), card]));
    try {
      const saved = JSON.parse(sessionStorage.getItem(orderKey));
      if (Array.isArray(saved) && saved.length === cards.length &&
          new Set(saved).size === cards.length && saved.every(link => cardsByLink.has(link))) {
        return saved.map(link => cardsByLink.get(link));
      }
    } catch { /* Shuffle if storage is unavailable or invalid. */ }

    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    try {
      sessionStorage.setItem(orderKey, JSON.stringify(shuffled.map(card => card.getAttribute('href'))));
    } catch { /* Use this order for the current page. */ }
    return shuffled;
  }

  const randomOrder = shuffledCards();
  let ranked = [];
  let visitBadges = [];

  function setOrder() {
    const byVisits = select.value === 'popular';
    grid.append(...(byVisits ? ranked.map(({ card }) => card) : randomOrder));
    note.hidden = !byVisits;
    for (const badge of visitBadges) badge.hidden = !byVisits;
  }

  select.value = 'default';
  setOrder();
  select.addEventListener('change', () => {
    setOrder();
    try { localStorage.setItem(sortKey, select.value); } catch { /* Storage may be unavailable. */ }
  });

  function enableVisitSort(ranking, period, partialCoverage) {
    ranked = ranking;
    note.textContent = `GA4 활성 사용자 기준 · ${period} · 카드 노출 위치가 방문 수에 영향을 줄 수 있습니다.` +
      (partialCoverage ? ' · 일부 게임은 태그가 빠져 있었던 기간의 방문 기록이 적을 수 있습니다.' : '');
    select.querySelector('[value="popular"]').disabled = false;

    visitBadges = ranked.filter(({ metrics }) => metrics?.activeUsers >= 10).slice(0, 3).map(({ card, metrics }) => {
      const badge = card.querySelector('.card-badge');
      badge.title = `활성 사용자 ${number.format(metrics.activeUsers)}명 · ${period}`;
      return badge;
    });
    try {
      if (localStorage.getItem(sortKey) === 'popular') {
        select.value = 'popular';
        setOrder();
      }
    } catch { /* Keep the default order. */ }
  }

  async function renderTraffic() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/geniuskey/lottery/refs/heads/ga4-stats/traffic.json', { credentials: 'omit' });
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

      if (ranked.some(({ metrics }) => metrics && (metrics.activeUsers || metrics.pageViews))) {
        enableVisitSort(ranked, rankingPeriod, parseDay(data.trackingSince) > rankingStart);
      }
    } catch {
      // The catalog stays available when the aggregate snapshot cannot load.
    }
  }

  renderTraffic();
})();
