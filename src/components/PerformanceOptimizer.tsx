import React, { useEffect } from 'react';

// Componente para optimizar el performance de la página
const PerformanceOptimizer: React.FC = () => {
  
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg',
        '/og-cover.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      // Defer analytics scripts
      const scripts = [
        'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
        'https://connect.facebook.net/en_US/fbevents.js'
      ];

      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      });
    };

    // Optimize CSS delivery
    const optimizeCSS = () => {
      // Load non-critical CSS asynchronously
      const nonCriticalCSS = [
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
      ];

      nonCriticalCSS.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
        };
        document.head.appendChild(link);
      });
    };

    // Implement service worker for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;

      const updateScrollPosition = () => {
        // Update scroll-dependent elements
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effects
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        parallaxElements.forEach(element => {
          const speed = parseFloat((element as HTMLElement).dataset.parallax || '0.5');
          (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        });

        ticking = false;
      };

      const requestScrollUpdate = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    };

    // Reduce layout thrashing
    const reduceLayoutThrashing = () => {
      // Batch DOM reads and writes
      const elements = document.querySelectorAll('[data-animate-on-scroll]');
      
      const observer = new IntersectionObserver((entries) => {
        // Batch all DOM writes
        const writes: (() => void)[] = [];
        
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            writes.push(() => {
              entry.target.classList.add('animate-in');
            });
          }
        });

        // Execute all writes in a single frame
        if (writes.length > 0) {
          requestAnimationFrame(() => {
            writes.forEach(write => write());
          });
        }
      }, {
        rootMargin: '50px',
        threshold: 0.1
      });

      elements.forEach(el => observer.observe(el));
    };

    // Memory management
    const optimizeMemory = () => {
      // Clean up unused event listeners
      const cleanupFunctions: (() => void)[] = [];

      // Debounce resize events
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // Handle resize logic
          window.dispatchEvent(new Event('optimizedResize'));
        }, 250);
      };

      window.addEventListener('resize', handleResize, { passive: true });
      cleanupFunctions.push(() => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      });

      // Cleanup on unmount
      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // Initialize all optimizations
    const initOptimizations = () => {
      preloadCriticalResources();
      optimizeImages();
      deferNonCriticalJS();
      optimizeCSS();
      registerServiceWorker();
      optimizeScroll();
      reduceLayoutThrashing();
      
      return optimizeMemory();
    };

    // Run optimizations after initial render
    const cleanup = initOptimizations();

    // Cleanup on unmount
    return cleanup;
  }, []);

  // Add critical CSS inline
  useEffect(() => {
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .lazy {
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .lazy.loaded {
        opacity: 1;
      }
      
      /* Optimize font loading */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Performance monitoring
  useEffect(() => {
    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          console.log('CLS:', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    observeWebVitals();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
