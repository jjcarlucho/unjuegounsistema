import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';

const Pain: React.FC = () => {
  return (
    <section id="dolor" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-in-left" className="max-w-5xl mx-auto">
          <h2 className="text-fluid-h2 font-serif font-bold mb-12 text-center">
            El Eco de la Misma Promesa Rota.
          </h2>
          
          <div className="quantum-card p-10 relative overflow-hidden">
            {/* Efecto sutil de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-quantum-green-cta/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-quantum-green-cta rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-xl md:text-2xl text-quantum-text-bright leading-relaxed font-light">
                  Lo conoces bien. Es el calor que te sube por el cuello cuando rompes tu propia regla. La negociación interna de "sólo una más" que siempre termina en el mismo lugar: un silencio amargo y la cuenta más baja.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-quantum-green-cta rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-xl md:text-2xl text-quantum-text-bright leading-relaxed font-light">
                  No fue el casino. No fue una mala racha. <span className="text-quantum-green-cta font-semibold">Fue el impulso ganándole a la lógica.</span>
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-quantum-green-cta rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-xl md:text-2xl text-quantum-text-bright leading-relaxed font-light">
                  Esa no es la naturaleza del juego. Es el síntoma de operar sin un protocolo. <span className="text-quantum-green-cta font-semibold">Un protocolo diseñado para protegerte de tu peor enemigo: tú mismo en un mal día.</span>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Pain; 