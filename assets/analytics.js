(() => {
  const { hostname, origin, pathname } = window.location;
  if (!['pages.euiyun.com', 'geniuskey.github.io'].includes(hostname)) return;
  if (pathname !== '/lottery' && !pathname.startsWith('/lottery/')) return;

  const measurementId = 'G-GFTNV73W8L';
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { page_location: origin + pathname });

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.append(tag);
})();
