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
      const popular = cards.map(card => {
        const slug = card.getAttribute('href').slice(2, -1);
        return { card, metrics: data.games?.[slug] };
      }).filter(({ metrics }) => validCount(metrics?.activeUsers) && metrics.activeUsers >= 10 && validCount(metrics.pageViews))
        .sort((a, b) => b.metrics.activeUsers - a.metrics.activeUsers || b.metrics.pageViews - a.metrics.pageViews)
        .slice(0, 3);

      for (const { card, metrics } of popular) {
        const badge = card.querySelector('.card-badge');
        badge.title = `활성 사용자 ${number.format(metrics.activeUsers)}명 · ${rankingPeriod}`;
        badge.hidden = false;
      }
    } catch {
      // The catalog stays available when the aggregate snapshot cannot load.
    }
  }

  renderTraffic();
})();
