import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import InteractiveCard from '../InteractiveCard';
import StripePaymentButton from '../StripePaymentButton';
import PaymentSecurityInfo from '../PaymentSecurityInfo';
import { CheckCircle, Star } from 'lucide-react';

const Offer: React.FC = () => {
  const offerItems = [
    {
      name: "El Ebook 'Un Juego, Un Sistema'",
      originalPrice: "499 USD",
      description: "El manual de operaciones completo"
    },
    {
      name: "BONUS: Tu Deseo Es Tu Mandato",
      originalPrice: "500 USD",
      description: "Serie de audios sobre mentalidad y manifestación"
    },
    {
      name: "BONUS: Curso de TFT",
      originalPrice: "297 USD",
      description: "Técnicas de transformación personal"
    }
  ];

  return (
    <section id="oferta" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-fluid-h2 font-serif font-bold mb-4">
              La Oferta Irresistible
            </h2>
            <div className="inline-block bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 mb-6">
              <span className="text-red-400 font-semibold text-sm">
                🚨 PREVENTA EXCLUSIVA - SOLO 50 CUPOS
              </span>
            </div>
          </div>
          
          <InteractiveCard className="p-8">
            <div className="space-y-6">
              {/* Tabla de Precios */}
              <div className="space-y-4">
                {offerItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-quantum-border">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-quantum-green-cta" />
                      <div>
                        <h3 className="text-quantum-text-bright font-semibold">{item.name}</h3>
                        <p className="text-quantum-text-dim text-sm opacity-70">{item.description}</p>
                      </div>
                    </div>
                    <span className="text-quantum-amber-accent font-bold">{item.originalPrice}</span>
                  </div>
                ))}
                
                {/* Total */}
                <div className="flex items-center justify-between py-4 border-t-2 border-quantum-green-cta/30 bg-quantum-gray/50 rounded-lg px-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-quantum-green-cta" />
                    <span className="text-quantum-text-bright font-bold text-lg">VALOR TOTAL DEL PAQUETE</span>
                  </div>
                  <span className="text-quantum-green-cta font-bold text-xl">$1,296 USD</span>
                </div>
              </div>
              
              {/* Precio Final */}
              <div className="text-center py-8 bg-gradient-to-r from-quantum-green-cta/10 to-quantum-amber-accent/10 rounded-xl border border-quantum-green-cta/20">
                <p className="text-quantum-text-dim mb-2">Tu Inversión en Preventa</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-quantum-text-dim line-through text-lg">$499</span>
                                       <span className="text-quantum-green-cta font-bold text-5xl cta-button">$17</span>
                   </div>
                   <p className="text-quantum-green-cta font-semibold mt-2">🎉 AHORRO DEL 96%</p>
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 font-bold text-sm">🔥 SOLO 23 CUPOS DISPONIBLES</p>
                                       <p className="text-quantum-text-dim text-xs mt-1">Una vez agotados, el precio subirá a $47</p>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <StripePaymentButton 
                  className="text-2xl px-12 py-6 cta-button" 
                  size="lg"
                  variant="primary"
                >
                  ACCEDER A LA PREVENTA HOY ⚡️
                </StripePaymentButton>
                
                {/* Información de seguridad */}
                <PaymentSecurityInfo />
              </div>
            </div>
          </InteractiveCard>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Offer; 