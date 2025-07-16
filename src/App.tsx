import React from 'react';
import PremiumHero from './components/PremiumHero';
import WhatIs from './components/WhatIs';
import Storytelling from './components/Storytelling';
import Benefits from './components/Benefits';
import PremiumComparison from './components/PremiumComparison';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Countdown from './components/Countdown';
import PremiumStickyCTA from './components/PremiumStickyCTA';
import Footer from './components/Footer';
import Bonuses from './components/Bonuses';
import ExitIntentPopup from './components/ExitIntentPopup';
import GuaranteeBadges from './components/GuaranteeBadges';
import ScarcitySection from './components/ScarcitySection';
import FAQDemolisher from './components/FAQDemolisher';
import { useExitIntent } from './hooks/useExitIntent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  const { showExitIntent, closeExitIntent } = useExitIntent();

  return (
    <HelmetProvider>
      <Helmet>
        <title>UN JUEGO. UN SISTEMA. — Método Matemático Exclusivo con 98% de Efectividad</title>
        <meta name="description" content="🔥 ÚLTIMO DÍA: El método matemático SECRETO con 98% de efectividad. Usado en más de 500,000 shoes. Genera $25,000+ USD. Solo 7 cupos restantes." />
        <meta name="keywords" content="sistema matemático, método exclusivo, ganar dinero, estrategia, precisión, 98% efectividad, $25000 USD" />
        <meta property="og:title" content="🚨 UN JUEGO. UN SISTEMA. — Método Matemático SECRETO (98% Efectividad)" />
        <meta property="og:description" content="🔥 ÚLTIMO DÍA: Genera $25,000+ USD con el método matemático más efectivo jamás revelado. Solo 7 cupos restantes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta property="og:image:alt" content="Portada del libro Un Juego Un Sistema - Método Matemático Secreto" />
        <meta property="og:url" content="https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🚨 UN JUEGO. UN SISTEMA. — Método Matemático SECRETO" />
        <meta name="twitter:description" content="🔥 Genera $25,000+ USD con 98% de precisión. Solo 7 cupos restantes." />
        <meta name="twitter:image" content="/og-cover.jpg" />
        <meta name="twitter:image:alt" content="Método matemático secreto con 98% de efectividad" />

        {/* Schema.org mejorado */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "UN JUEGO. UN SISTEMA. - Método Matemático Exclusivo",
            "description": "El método matemático secreto con 98% de efectividad. Usado en más de 500,000 shoes. Genera ganancias de $25,000+ USD. Nunca antes revelado públicamente.",
            "image": "https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app/og-cover.jpg",
            "brand": {
              "@type": "Brand",
              "name": "UN JUEGO. UN SISTEMA."
            },
            "offers": {
              "@type": "Offer",
              "price": "2500.00",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden">
        {/* Efectos de fondo premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/3 to-purple-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 animate-pulse"></div>
        {/* Exit Intent Popup */}
        <ExitIntentPopup isOpen={showExitIntent} onClose={closeExitIntent} />

        {/* Secciones principales */}
        <PremiumHero />
        <WhatIs />
        <Storytelling />
        <Benefits />
        <GuaranteeBadges />
        <PremiumComparison />
        <ScarcitySection />
        <Testimonials />
        <Countdown />
        <Bonuses />
        <FAQDemolisher />
        <FinalCTA />
        <Footer />
        <PremiumStickyCTA />
      </div>
    </HelmetProvider>
  );
}

export default App;