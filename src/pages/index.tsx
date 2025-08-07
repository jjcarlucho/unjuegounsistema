import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MasterLayout from '../components/MasterLayout';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Pain from '../components/sections/Pain';
import Revelation from '../components/sections/Revelation';
import Proof from '../components/sections/Proof';
import Content from '../components/sections/Content';
import Bonuses from '../components/sections/Bonuses';
import Testimonials from '../components/sections/Testimonials';
import Offer from '../components/sections/Offer';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';
import { useMetaPixel } from '../hooks/useMetaPixel';

const HomePage: React.FC = () => {
  const { trackViewContent } = useMetaPixel();

  useEffect(() => {
    // Rastrear vista de contenido cuando se carga la página
    trackViewContent('Sistema Matemático Premium - Página Principal');
  }, [trackViewContent]);

  return (
    <>
      <Helmet>
        <title>Un Juego, Un Sistema | El Acceso al Método de Baccarat de la Élite</title>
        <meta name="description" content="Por primera vez en 20 años, el manual de operaciones de un sindicato de élite de Montecarlo sale a la luz. El método que transforma el impulso en disciplina y el azar en una ventaja estadística." />
        <meta name="keywords" content="Baccarat, sistema baccarat, estrategia baccarat, ganar baccarat, un juego un sistema" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Un Juego, Un Sistema | El Acceso al Método de Baccarat de la Élite" />
        <meta property="og:description" content="Por primera vez en 20 años, el manual de operaciones de un sindicato de élite de Montecarlo sale a la luz. El método que transforma el impulso en disciplina y el azar en una ventaja estadística." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unjuegounsistema.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Un Juego, Un Sistema | El Acceso al Método de Baccarat de la Élite" />
        <meta name="twitter:description" content="Por primera vez en 20 años, el manual de operaciones de un sindicato de élite de Montecarlo sale a la luz." />
        
        {/* Schema.org */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Un Juego, Un Sistema - Manual de Operaciones de Baccarat",
            "description": "El método que transforma el impulso en disciplina y el azar en una ventaja estadística",
            "offers": {
              "@type": "Offer",
              "price": "17.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/LimitedAvailability"
            }
          }
        `}</script>
      </Helmet>

      <MasterLayout>
        {/* Coloca todas tus secciones aquí, una tras otra */}
        <Navbar />
        <Hero />
        <Pain />
        <Revelation />
        <Proof />
        <Content />
        <Bonuses />
        <Testimonials />
        <Offer />
        <FAQ />
        <FinalCTA />
      </MasterLayout>
    </>
  );
};

export default HomePage; 