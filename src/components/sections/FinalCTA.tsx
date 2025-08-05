import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import CTAButton from '../CTAButton';
import { CheckCircle, Shield, Clock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="final" className="py-section bg-quantum-dark relative overflow-hidden">
      {/* Efecto Aurora intenso */}
      <div className="absolute inset-0 bg-gradient-radial from-quantum-green-glow via-transparent to-transparent opacity-30"></div>
      
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-fluid-h2 font-serif font-bold mb-6">
              ¿Estás listo para dejar de jugar y empezar a operar?
            </h2>
            
            <p className="text-lg text-quantum-text-dim mb-8 max-w-2xl mx-auto">
              El sistema que transformó a jugadores impulsivos en operadores disciplinados está ahora a tu alcance. No es una promesa, es un método probado.
            </p>
            
            {/* CTA Principal - 25% más grande */}
            <div className="mb-8">
              <CTAButton 
                onClick={() => {
                  const offerSection = document.getElementById('oferta');
                  if (offerSection) {
                    offerSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-4xl px-20 py-10 bg-quantum-green-cta text-white shadow-quantum-cta hover:scale-105 font-bold cta-button"
              >
                OBTENER ACCESO INMEDIATO POR $17
              </CTAButton>
            </div>
            
            {/* Elementos de Confianza */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-quantum-text-dim">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-quantum-green-cta" />
                <span>Garantía de 30 Días</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-quantum-green-cta" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-quantum-green-cta" />
                <span>Acceso 24/7</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default FinalCTA; 