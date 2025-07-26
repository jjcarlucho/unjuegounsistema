import { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  // Función para enviar eventos a Google Analytics
  const trackEvent = ({ event, category, action, label, value }: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    
    // También log para desarrollo
    console.log('Analytics Event:', { event, category, action, label, value });
  };

  // Función para trackear conversiones
  const trackConversion = (conversionType: 'purchase_attempt' | 'purchase_success' | 'purchase_failed') => {
    trackEvent({
      event: 'conversion',
      category: 'ecommerce',
      action: conversionType,
      label: 'sistema_matematico_17usd',
      value: 17
    });
  };

  // Función para trackear interacciones
  const trackInteraction = (element: string, action: string) => {
    trackEvent({
      event: 'interaction',
      category: 'engagement',
      action: action,
      label: element
    });
  };

  // Función para trackear scroll depth
  const trackScrollDepth = (percentage: number) => {
    trackEvent({
      event: 'scroll',
      category: 'engagement',
      action: 'scroll_depth',
      label: `${percentage}%`,
      value: percentage
    });
  };

  // Función para trackear tiempo en página
  const trackTimeOnPage = (seconds: number) => {
    trackEvent({
      event: 'timing',
      category: 'engagement',
      action: 'time_on_page',
      value: seconds
    });
  };

  // Hook para trackear scroll depth automáticamente
  useEffect(() => {
    let maxScrollDepth = 0;
    const scrollDepthThresholds = [25, 50, 75, 90, 100];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Trackear thresholds específicos
        scrollDepthThresholds.forEach(threshold => {
          if (scrollPercent >= threshold && !trackedDepths.has(threshold)) {
            trackedDepths.add(threshold);
            trackScrollDepth(threshold);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hook para trackear tiempo en página
  useEffect(() => {
    const startTime = Date.now();
    const timeThresholds = [30, 60, 120, 300, 600]; // 30s, 1m, 2m, 5m, 10m
    const trackedTimes = new Set<number>();

    const interval = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      
      timeThresholds.forEach(threshold => {
        if (timeOnPage >= threshold && !trackedTimes.has(threshold)) {
          trackedTimes.add(threshold);
          trackTimeOnPage(threshold);
        }
      });
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    trackEvent,
    trackConversion,
    trackInteraction,
    trackScrollDepth,
    trackTimeOnPage
  };
};

// Hook específico para trackear CTAs
export const useCTATracking = () => {
  const { trackInteraction, trackConversion } = useAnalytics();

  const trackCTAClick = (ctaLocation: string, ctaText: string) => {
    trackInteraction(`cta_${ctaLocation}`, 'click');
    trackConversion('purchase_attempt');
    
    // También trackear en Facebook Pixel si está disponible
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 17,
        currency: 'USD',
        content_name: 'Sistema Matemático',
        content_category: 'Digital Product'
      });
    }
  };

  const trackCTAView = (ctaLocation: string) => {
    trackInteraction(`cta_${ctaLocation}`, 'view');
  };

  return {
    trackCTAClick,
    trackCTAView
  };
};

// Hook para trackear formularios
export const useFormTracking = () => {
  const { trackInteraction } = useAnalytics();

  const trackFormStart = (formName: string) => {
    trackInteraction(`form_${formName}`, 'start');
  };

  const trackFormComplete = (formName: string) => {
    trackInteraction(`form_${formName}`, 'complete');
  };

  const trackFormError = (formName: string, errorType: string) => {
    trackInteraction(`form_${formName}`, `error_${errorType}`);
  };

  return {
    trackFormStart,
    trackFormComplete,
    trackFormError
  };
};
