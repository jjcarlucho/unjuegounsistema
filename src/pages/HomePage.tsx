// Landing page sin videos ni CTA pegajoso - Versión limpia y profesional
import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import UltraHero from '../components/UltraHero';
import Benefits from '../components/Benefits';
import Storytelling from '../components/Storytelling';
import WhatIs from '../components/WhatIs';
import ImprovedTestimonials from '../components/ImprovedTestimonials';
import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import UltraHero from '../components/UltraHero';
import Benefits from '../components/Benefits';
import Storytelling from '../components/Storytelling';
import WhatIs from '../components/WhatIs';
import ImprovedTestimonials from '../components/ImprovedTestimonials';

import Comparison from '../components/Comparison';
import Bonuses from '../components/Bonuses';
import UltraFAQ from '../components/UltraFAQ';

import Footer from '../components/Footer';
import StickyNavigation from '../components/StickyNavigation';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import ExitIntentPopup from '../components/ExitIntentPopup';
import { useExitIntent } from '../hooks/useExitIntent';
import { useAnalytics } from '../hooks/useAnalytics';

const HomePage: React.FC = () => {
  const { showExitIntent, closeExitIntent } = useExitIntent();

  // Inicializar analytics
  useAnalytics();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Baccarat: El Sistema Matemático Secreto para Ganar | Ebook Exclusivo</title>
        <meta name="description" content="Descubre el método matemático definitivo para Baccarat. Aumenta tus ganancias con un sistema probado, 98% efectivo y resultados verificables. ¡Preventa exclusiva!" />
        <meta name="keywords" content="baccarat, sistema baccarat, método baccarat, estrategia baccarat, ganar baccarat, ebook baccarat, preventa ebook, sistema matemático, ventaja baccarat, casino, juego de cartas" />
        <meta property="og:title" content="Domina el Baccarat: Sistema Matemático Secreto para Ganar Más" />
        <meta property="og:description" content="Aprende el sistema matemático exclusivo para Baccarat. Obtén una ventaja real en el juego y maximiza tus ganancias. ¡Ebook en preventa!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta property="og:image:alt" content="Portada del ebook Sistema Matemático para Baccarat" />
        <meta property="og:url" content="https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domina el Baccarat: Sistema Matemático Secreto para Ganar Más" />
        <meta name="twitter:description" content="Aprende el sistema matemático exclusivo para Baccarat. Obtén una ventaja real en el juego y maximiza tus ganancias. ¡Ebook en preventa!" />
        <meta name="twitter:image" content="/og-cover.jpg" />
        <meta name="twitter:image:alt" content="Sistema Matemático para Baccarat" />

        {/* Schema.org actualizado con precio de $17 */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Ebook: El Sistema Matemático Definitivo para Baccarat",
            "description": "Descubre el sistema matemático más avanzado para Baccarat. Este ebook te proporciona una ventaja estadística probada, basada en años de análisis de datos y resultados verificables. Ideal para jugadores que buscan maximizar sus ganancias y tomar decisiones informadas.",
            "image": "https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app/og-cover.jpg",
            "brand": {
              "@type": "Brand",
              "name": "Sistema Baccarat Pro"
            },
            "offers": {
              "@type": "Offer",
              "price": "17.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/LimitedAvailability",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "Organization",
                "name": "Sistema Baccarat Pro"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847",
              "bestRating": "5"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Javier G."
                },
                "reviewBody": "Este sistema es una locura. He recuperado mis pérdidas y ahora gano de forma consistente en Baccarat. ¡Totalmente recomendado!"
              }
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
        {/* Optimizador de performance */}
        <PerformanceOptimizer />

        {/* Navegación sticky mejorada */}
        <StickyNavigation />

        {/* Línea superior sutil */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-purple-500"></div>

        {/* Force deployment - timestamp: 2025-07-26-19:55 */}

        {/* Exit Intent Popup */}
        <ExitIntentPopup isOpen={showExitIntent} onClose={closeExitIntent} />

        {/* Contenido principal con IDs para navegación */}
        <div id="hero">
          <UltraHero />
        </div>

        <div id="benefits">
          <Benefits />
        </div>

        <Storytelling />
        <WhatIs />

        <div id="testimonials">
          <ImprovedTestimonials />
        </div>

        <Comparison />
        <Bonuses />

        <div id="faq">
          <UltraFAQ />
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
