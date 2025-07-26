import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Shield, Zap, Clock, Star } from 'lucide-react';
import { useStripe } from '../hooks/useStripe';

const StickyNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { redirectToCheckout, loading } = useStripe();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);

      // Detectar sección activa
      const sections = ['hero', 'benefits', 'testimonials', 'faq', 'cta'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurchaseClick = async () => {
    await redirectToCheckout();
  };

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: Star },
    { id: 'benefits', label: 'Beneficios', icon: Zap },
    { id: 'testimonials', label: 'Testimonios', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: Clock },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Navegación principal */}
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-emerald-500/20"
          >
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                
                {/* Logo/Título */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
                    <Zap size={16} className="text-black" />
                  </div>
                  <span className="text-white font-bold text-lg">UN JUEGO. UN SISTEMA.</span>
                </div>

                {/* Navegación */}
                <div className="hidden md:flex items-center gap-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                          activeSection === item.id
                            ? 'bg-emerald-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }`}
                      >
                        <Icon size={16} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* CTA principal */}
                <button
                  onClick={handlePurchaseClick}
                  disabled={loading}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-sm px-6 py-2 rounded-xl transition-all duration-300 shadow-lg border border-emerald-400 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>PROCESANDO...</span>
                    </>
                  ) : (
                    <>
                      <Zap size={16} />
                      <span>COMPRAR $17</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.nav>

          {/* Botón scroll to top */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white p-3 rounded-full shadow-2xl border-2 border-emerald-400 transition-all duration-300 hover:scale-110"
          >
            <ChevronUp size={24} />
          </motion.button>

          {/* Indicador de progreso */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 z-50 origin-left"
            style={{
              width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default StickyNavigation;
