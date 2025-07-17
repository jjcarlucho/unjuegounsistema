import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import UltraHero from './components/UltraHero';
import WhatIs from './components/WhatIs';
import Benefits from './components/Benefits';
import WhatYouGet from './components/WhatYouGet';
import PremiumComparison from './components/PremiumComparison';
import Testimonials from './components/Testimonials';
import UltraFAQ from './components/UltraFAQ';
import ScarcitySection from './components/ScarcitySection';
import UltraFinalCTA from './components/UltraFinalCTA';
import PremiumStickyCTA from './components/PremiumStickyCTA';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import LeadCapturePopup from './components/LeadCapturePopup';

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showLeadPopup, setShowLeadPopup] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <title>UN JUEGO. UN SISTEMA. — Método Matemático Exclusivo</title>
        <meta name="description" content="El método matemático secreto con 98% de efectividad. Usado en más de 500,000 shoes. Nunca antes revelado públicamente." />
        <meta name="keywords" content="sistema matemático, método exclusivo, inversión, estrategia, precisión" />
        <meta property="og:title" content="UN JUEGO. UN SISTEMA. — Método Matemático Exclusivo" />
        <meta property="og:description" content="El método matemático secreto con 98% de efectividad. Usado en más de 500,000 shoes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta property="og:image:alt" content="Portada del libro Un Juego Un Sistema" />
        <meta property="og:url" content="https://project55-irg46102s-jonathans-projects-53172663.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UN JUEGO. UN SISTEMA." />
        <meta name="twitter:description" content="Método matemático exclusivo con 98% de precisión" />
        <meta name="twitter:image" content="/og-cover.jpg" />
        <meta name="twitter:image:alt" content="Portada del libro Un Juego Un Sistema" />

        {/* Schema.org mejorado */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "UN JUEGO. UN SISTEMA.",
            "description": "El método matemático secreto con 98% de efectividad. Usado en más de 500,000 shoes. Nunca antes revelado públicamente.",
            "image": "https://project55-irg46102s-jonathans-projects-53172663.vercel.app/og-cover.jpg",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
        <UltraHero onCTAClick={() => setShowLeadPopup(true)} />
        <WhatIs />
        <Benefits />
        <WhatYouGet />
        <PremiumComparison onCTAClick={() => setShowLeadPopup(true)} />
        <Testimonials />
        <UltraFAQ onCTAClick={() => setShowLeadPopup(true)} />
        <PremiumStickyCTA onCTAClick={() => setShowLeadPopup(true)} />
        <ScarcitySection />
        <UltraFinalCTA onCTAClick={() => setShowLeadPopup(true)} />
        <Footer />
        <ExitIntentPopup
          isOpen={showExitPopup}
          onClose={() => setShowExitPopup(false)}
        />
        <LeadCapturePopup
          isOpen={showLeadPopup}
          onClose={() => setShowLeadPopup(false)}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;