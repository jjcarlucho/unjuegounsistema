// Google Analytics 4 Configuration
(function() {
  // Replace with your actual GA4 Measurement ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
  // Load Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: 'UN JUEGO. UN SISTEMA. - Método Matemático',
    page_location: window.location.href,
    send_page_view: true,
    // Enhanced ecommerce
    custom_map: {
      'custom_parameter_1': 'landing_page_version'
    }
  });

  // Enhanced Ecommerce Events
  window.trackPurchase = function(transactionId, value) {
    gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'USD',
      items: [{
        item_id: 'sistema_matematico',
        item_name: 'UN JUEGO. UN SISTEMA. - Método Matemático',
        category: 'Digital Product',
        quantity: 1,
        price: value
      }]
    });
  };

  window.trackBeginCheckout = function() {
    gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: 17,
      items: [{
        item_id: 'sistema_matematico',
        item_name: 'UN JUEGO. UN SISTEMA. - Método Matemático',
        category: 'Digital Product',
        quantity: 1,
        price: 17
      }]
    });
  };

  // Custom events for landing page optimization
  window.trackCTAClick = function(location, text) {
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: location,
      custom_parameter_1: text,
      value: 1
    });
  };

  window.trackScrollDepth = function(percentage) {
    gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage
    });
  };

  window.trackTimeOnPage = function(seconds) {
    gtag('event', 'timing_complete', {
      name: 'time_on_page',
      value: seconds
    });
  };

  // Track page load performance
  window.addEventListener('load', function() {
    setTimeout(function() {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        gtag('event', 'timing_complete', {
          name: 'page_load_time',
          value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
        });
      }
    }, 0);
  });

})();

// Facebook Pixel Configuration
(function() {
  // Replace with your actual Facebook Pixel ID
  const FACEBOOK_PIXEL_ID = 'XXXXXXXXXXXXXXXXX';
  
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', FACEBOOK_PIXEL_ID);
  fbq('track', 'PageView');

  // Enhanced ecommerce events for Facebook
  window.trackFacebookPurchase = function(value, currency = 'USD') {
    fbq('track', 'Purchase', {
      value: value,
      currency: currency,
      content_name: 'UN JUEGO. UN SISTEMA. - Método Matemático',
      content_category: 'Digital Product',
      content_ids: ['sistema_matematico'],
      content_type: 'product'
    });
  };

  window.trackFacebookInitiateCheckout = function() {
    fbq('track', 'InitiateCheckout', {
      value: 17,
      currency: 'USD',
      content_name: 'UN JUEGO. UN SISTEMA. - Método Matemático',
      content_category: 'Digital Product',
      content_ids: ['sistema_matematico'],
      content_type: 'product'
    });
  };

  window.trackFacebookAddToCart = function() {
    fbq('track', 'AddToCart', {
      value: 17,
      currency: 'USD',
      content_name: 'UN JUEGO. UN SISTEMA. - Método Matemático',
      content_category: 'Digital Product',
      content_ids: ['sistema_matematico'],
      content_type: 'product'
    });
  };

  window.trackFacebookViewContent = function() {
    fbq('track', 'ViewContent', {
      value: 17,
      currency: 'USD',
      content_name: 'UN JUEGO. UN SISTEMA. - Método Matemático',
      content_category: 'Digital Product',
      content_ids: ['sistema_matematico'],
      content_type: 'product'
    });
  };

})();

// TikTok Pixel Configuration (optional)
(function() {
  // Replace with your actual TikTok Pixel ID
  const TIKTOK_PIXEL_ID = 'XXXXXXXXXXXXXXXXX';
  
  !function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page();
  }(window, document, 'ttq');

  window.trackTikTokPurchase = function(value) {
    ttq.track('CompletePayment', {
      value: value,
      currency: 'USD',
      content_name: 'UN JUEGO. UN SISTEMA. - Método Matemático',
      content_category: 'Digital Product'
    });
  };

})();

// Hotjar Configuration (optional)
(function() {
  // Replace with your actual Hotjar ID
  const HOTJAR_ID = 'XXXXXXX';
  
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

})();

// Microsoft Clarity Configuration (optional)
(function() {
  // Replace with your actual Clarity ID
  const CLARITY_ID = 'XXXXXXXXXX';
  
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", CLARITY_ID);

})();

// Custom conversion tracking
window.trackConversion = function(type, value = 17) {
  // Track in all platforms
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXX', // Replace with your Google Ads conversion ID
      value: value,
      currency: 'USD'
    });
  }
  
  if (typeof fbq !== 'undefined') {
    window.trackFacebookPurchase(value);
  }
  
  if (typeof ttq !== 'undefined') {
    window.trackTikTokPurchase(value);
  }
  
  console.log(`Conversion tracked: ${type} - $${value}`);
};
