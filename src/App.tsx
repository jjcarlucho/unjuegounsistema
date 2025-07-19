import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Success from './pages/Success';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>UN JUEGO. UN SISTEMA. - Método Matemático Secreto con 98% de Efectividad</title>
          <meta name="description" content="Descubre el método matemático secreto con 98% de efectividad. Sistema completo + bonos valorados en $797 USD. Solo $17 en preventa por tiempo limitado." />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tudominio.com/" />
          <meta property="og:title" content="UN JUEGO. UN SISTEMA. - Método Matemático Secreto" />
          <meta property="og:description" content="Sistema matemático con 98% de efectividad. Valor $844 USD - Solo $17 en preventa." />
          <meta property="og:image" content="/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tudominio.com/" />
          <meta property="twitter:title" content="UN JUEGO. UN SISTEMA. - Método Matemático Secreto" />
          <meta property="twitter:description" content="Sistema matemático con 98% de efectividad. Valor $844 USD - Solo $17 en preventa." />
          <meta property="twitter:image" content="/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg" />

          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

          {/* Preload critical resources */}
          <link rel="preload" href="/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg" as="image" />

          {/* SEO adicional */}
          <meta name="robots" content="index, follow" />
          <meta name="author" content="UN JUEGO. UN SISTEMA." />
          <meta name="keywords" content="método matemático, sistema de juego, estrategia matemática, ganar dinero, sistema probado" />
        </Helmet>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;