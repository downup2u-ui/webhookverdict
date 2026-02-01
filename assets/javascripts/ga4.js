// Minimal GA4 loader (Observation only)
(function () {
  const GA_MEASUREMENT_ID = "G-LFKZ365DZB"; // ← 换成你的

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
    anonymize_ip: true
  });
})();
