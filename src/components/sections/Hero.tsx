import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import CTAButton from '../CTAButton';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative"
    >
      {/* Efecto de brillo sutil detrás del contenido */}
      <div className="absolute inset-0 bg-gradient-radial from-quantum-green-glow/20 via-transparent to-transparent opacity-60"></div>
      
      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-7xl mx-auto">
        <AnimatedSection animation="slide-up" className="text-center space-y-8">
          {/* Badge de exclusividad */}
          <div className="inline-flex items-center gap-2 bg-quantum-green-cta/10 border border-quantum-green-cta/20 px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-quantum-green-cta" />
            <span className="text-quantum-green-cta font-semibold text-sm tracking-wide">
              CONOCIMIENTO DESCLASIFICADO
            </span>
          </div>
          
          {/* Título principal con efectos mejorados */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-none mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              El Azar es un Impuesto
            </span>
            <br />
            <span className="bg-gradient-to-r from-quantum-green-cta via-emerald-400 to-quantum-green-cta bg-clip-text text-transparent">
              a los Impacientes.
            </span>
          </h1>
          
          {/* Subtítulo con mejor tipografía */}
          <p className="text-xl md:text-2xl text-quantum-text-bright max-w-5xl mx-auto mb-12 leading-relaxed font-light">
            Durante 20 años, un círculo de élite usó un manual de operaciones para tratar el Baccarat no como un juego, sino como un mercado. 
            <span className="text-quantum-green-cta font-semibold"> Hoy, ese protocolo sale a la luz.</span>
          </p>
          
          {/* CTA mejorado */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAButton 
              onClick={() => {
                const offerSection = document.getElementById('oferta');
                if (offerSection) {
                  offerSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group text-2xl px-12 py-6 bg-gradient-to-r from-quantum-green-cta to-emerald-500 text-white shadow-2xl hover:shadow-quantum-cta hover:scale-105 transition-all duration-300 font-bold tracking-wide border-2 border-quantum-green-cta/20" 
              showArrow={true}
            >
              <span className="flex items-center gap-3">
                DESCUBRIR EL PROTOCOLO
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </CTAButton>
          </div>
          
          {/* Elementos de confianza */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-quantum-text-dim">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-quantum-green-cta rounded-full"></div>
              <span>Acceso Inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-quantum-green-cta rounded-full"></div>
              <span>Garantía 30 Días</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-quantum-green-cta rounded-full"></div>
              <span>Soporte 24/7</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero; 