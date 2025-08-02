import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleCTAClick = () => {
    // Scroll to the offer section
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-quantum-dark/80 backdrop-blur-lg border-b border-quantum-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Título */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-serif font-bold text-quantum-text-bright">
              UN JUEGO. UN SISTEMA.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-quantum-text-dim hover:text-quantum-green-cta transition-colors duration-300 relative group font-medium"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-quantum-green-cta transition-all duration-300 group-hover:w-full"></div>
              </a>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={handleCTAClick}
              className="bg-quantum-green-cta text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-quantum-cta cta-button"
            >
                              COMPRAR AHORA $47
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-quantum-text-dim hover:text-quantum-text-bright"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden quantum-card mt-4 p-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-quantum-text-dim hover:text-quantum-text-bright transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={handleCTAClick}
                className="w-full bg-quantum-green-cta text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-quantum-cta cta-button"
              >
                COMPRAR AHORA $47
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 