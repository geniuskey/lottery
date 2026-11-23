(() => {
  const stats = document.getElementById('trafficStats');
  const cards = [...document.querySelectorAll('.game-card')];
  const number = new Intl.NumberFormat('ko-KR');
  const day = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeZone: 'UTC' });
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const dayMs = 86_400_000;

  function hasMetrics(value) {
    return value && [value.activeUsers, value.pageViews].every(metric => Number.isSafeInteger(metric) && metric >= 0);
  }

  async function renderTraffic() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/geniuskey/lottery/ga4-stats/traffic.json', { credentials: 'omit' });
      if (!response.ok) return;
      const data = await response.json();
      if (data?.source !== 'ga4' || !hasMetrics(data.site)) return;
      const age = Date.now() - Date.parse(data.generatedAt);
      if (!Number.isFinite(age) || age < -dayMs || age > 7 * dayMs) return;
      if (!datePattern.test(data.startDate) || !datePattern.test(data.endDate)) return;
      const start = Date.parse(data.startDate);
      const end = Date.parse(data.endDate);
      if (end - start !== 29 * dayMs) return;

      stats.querySelector('#trafficPeriod').textContent = `${day.format(start)} ~ ${day.format(end)}`;
      stats.querySelector('#trafficUsers').textContent = number.format(data.site.activeUsers);
      stats.querySelector('#trafficViews').textContent = number.format(data.site.pageViews);
      stats.hidden = false;
      stats.querySelector('#trafficCoverage').hidden = data.trackingSince <= data.startDate;

      if (!datePattern.test(data.rankingStartDate)) return;
      const rankingStart = Date.parse(data.rankingStartDate);
      if (!Number.isFinite(rankingStart) || rankingStart < start || rankingStart > end) return;
      const rankingPeriod = `${day.format(rankingStart)} ~ ${day.format(end)}`;
      const popular = cards.map(card => {
        const slug = card.getAttribute('href').slice(2, -1);
        return { card, metrics: data.games?.[slug] };
      }).filter(({ metrics }) => hasMetrics(metrics) && metrics.activeUsers >= 10)
        .sort((a, b) => b.metrics.activeUsers - a.metrics.activeUsers || b.metrics.pageViews - a.metrics.pageViews)
        .slice(0, 3);

      for (const { card, metrics } of popular) {
        const badge = card.querySelector('.card-badge');
        badge.textContent = '인기';
        badge.classList.add('is-popular');
        badge.title = `활성 사용자 ${number.format(metrics.activeUsers)}명 · ${rankingPeriod}`;
      }
    } catch {
      // The catalog stays available when the aggregate snapshot cannot load.
    }
  }

  renderTraffic();
})();
