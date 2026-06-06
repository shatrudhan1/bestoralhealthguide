import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useGoogleAnalytics = (trackingId = 'G-XXXXXXXXXX') => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Mock GA4
    if (!window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingId);
      console.log(`GA4 Initialized with ID: ${trackingId}`);
    }
  }, [trackingId]);

  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
      console.log(`GA4 Pageview: ${location.pathname}`);

      // Custom events based on path
      if (location.pathname.startsWith('/blog/')) {
        trackEvent('blog_view', { path: location.pathname });
      } else if (location.pathname.startsWith('/tools/')) {
        trackEvent('tool_usage', { tool: location.pathname });
      }
    }
  }, [location]);

  const trackEvent = (eventName, params = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, params);
      console.log(`GA4 Event: ${eventName}`, params);
    }
  };

  return { trackEvent };
};