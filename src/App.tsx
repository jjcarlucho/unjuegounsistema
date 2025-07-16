import React from 'react';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import Storytelling from './components/Storytelling';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Countdown from './components/Countdown';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import Bonuses from './components/Bonuses';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
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
        <meta property="og:url" content="https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UN JUEGO. UN SISTEMA." />
        <meta name="twitter:description" content="Método matemático exclusivo con 98% de precisión" />
        <meta name="twitter:image" content="/og-cover.jpg" />
        <meta name="twitter:image:alt" content="Portada del libro Un Juego Un Sistema" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "UN JUEGO. UN SISTEMA.",
            "description": "El método matemático secreto con 98% de efectividad. Usado en más de 500,000 shoes. Nunca antes revelado públicamente.",
            "image": "https://project-5-oiqg3uc1l-jonathans-projects-53172663.vercel.app/og-cover.jpg",
            "brand": {
              "@type": "Brand",
              "name": "UN JUEGO. UN SISTEMA."
            },
            "offers": {
              "@type": "Offer",
              "price": "25000.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-[#181A20] via-[#23262F] to-[#101014] text-white">
        <Hero />
        <WhatIs />
        <Storytelling />
        <Benefits />
        <Comparison />
        <Testimonials />
        <Countdown />
        <Bonuses />
        <FinalCTA />
        <Footer />
        <StickyCTA />
      </div>
    </HelmetProvider>
  );
}

export default App;