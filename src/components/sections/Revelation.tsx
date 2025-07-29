import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';

const Revelation: React.FC = () => {
  return (
    <section id="revelacion" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Columna Izquierda - Solo Título */}
            <div className="relative">
              <div className="text-center lg:text-left">
                <h2 className="text-fluid-h2 font-serif font-bold text-quantum-text-bright">
                  El Secreto de 10.000 Dólares que Nunca Debió Salir a la Luz.
                </h2>
              </div>
            </div>
            
            {/* Columna Derecha - Contenido */}
            <div className="space-y-8">
              {/* Tag de "EL SECRETO MEJOR GUARDADO" */}
              <div className="inline-block bg-quantum-amber-accent/10 px-4 py-2 rounded-full border border-quantum-amber-accent/20">
                <span className="text-quantum-amber-accent font-semibold text-sm">
                  🔒 EL SECRETO MEJOR GUARDADO
                </span>
              </div>
              
              <div className="space-y-6 text-quantum-text-dim leading-relaxed">
                <p className="text-lg md:text-xl">
                  A principios de los 2000, un colectivo privado de analistas y jugadores de high-stakes se propuso resolver el Baccarat. No con corazonadas, sino con pura lógica matemática y disciplina conductual. Crearon un manual de operaciones interno.
                </p>
                
                <p className="text-lg md:text-xl">
                  El acceso a su círculo y a este conocimiento costaba 10.000 USD y exigía un acuerdo de confidencialidad absoluto. Durante dos décadas, funcionó en las sombras.
                </p>
                
                <p className="text-lg md:text-xl">
                  Ahora, las circunstancias han cambiado, y los guardianes originales del sistema han autorizado una liberación única y limitada de este conocimiento. Lo que antes era el privilegio de una élite, ahora puede ser tu manual de operaciones.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Revelation; 