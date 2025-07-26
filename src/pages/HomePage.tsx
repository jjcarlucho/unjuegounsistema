import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import UltraHero from '../components/UltraHero';
import Benefits from '../components/Benefits';
import Storytelling from '../components/Storytelling';
import WhatIs from '../components/WhatIs';
import ImprovedTestimonials from '../components/ImprovedTestimonials';
import CaseStudies from '../components/CaseStudies';

import Comparison from '../components/Comparison';
import Bonuses from '../components/Bonuses';
import UltraFAQ from '../components/UltraFAQ';

import Footer from '../components/Footer';
import UltraStickyCTA from '../components/UltraStickyCTA';
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
        <title>UN JUEGO. UN SISTEMA. — Método Matemático Exclusivo con 98% de Efectividad</title>
        <meta name="description" content="🔥 MÉTODO MATEMÁTICO EXCLUSIVO: Sistema con 98% de efectividad verificada. Casos de estudio reales y resultados documentados. Solo $17 USD." />
        <meta name="keywords" content="sistema matemático, método exclusivo, ganar dinero, estrategia, precisión, 98% efectividad, $17 USD" />
        <meta property="og:title" content="🚨 UN JUEGO. UN SISTEMA. — Método Matemático SECRETO (98% Efectividad)" />
        <meta property="og:description" content="🔥 MÉTODO MATEMÁTICO EXCLUSIVO: Sistema con 98% de efectividad. Casos de estudio reales y resultados verificables. Solo $17 USD." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta property="og:image:alt" content="Portada del libro Un Juego Un Sistema - Método Matemático Secreto" />
        <meta property="og:url" content="https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🚨 UN JUEGO. UN SISTEMA. — Método Matemático SECRETO" />
        <meta name="twitter:description" content="🔥 Método matemático con 98% de efectividad. Casos de estudio reales. Solo $17 USD." />
        <meta name="twitter:image" content="/og-cover.jpg" />
        <meta name="twitter:image:alt" content="Método matemático secreto con 98% de efectividad" />

        {/* Schema.org actualizado con precio de $17 */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "UN JUEGO. UN SISTEMA. - Método Matemático Exclusivo",
            "description": "El método matemático exclusivo con 98% de efectividad verificada. Casos de estudio reales con resultados documentados. Sistema probado por profesionales.",
            "image": "https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app/og-cover.jpg",
            "brand": {
              "@type": "Brand",
              "name": "UN JUEGO. UN SISTEMA."
            },
            "offers": {
              "@type": "Offer",
              "price": "17.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/LimitedAvailability",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "Organization",
                "name": "UN JUEGO. UN SISTEMA."
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
                  "name": "Carlos M."
                },
                "reviewBody": "Gané $18,500 en mi primera semana usando este sistema matemático."
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

        {/* Deployment trigger comment */}

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

        {/* Nuevos casos de estudio */}
        <CaseStudies />

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
