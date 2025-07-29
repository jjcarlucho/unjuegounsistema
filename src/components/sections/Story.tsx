import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';

const Story: React.FC = () => {
  return (
    <section className="py-20 bg-syndicate-dark">
      <Container>
        <AnimatedSection animation="slide-in-right" className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-syndicate-text-bright mb-10 text-center">
            El Secreto de 10.000 Dólares que Nunca Debió Salir a la Luz.
          </h2>
          
          <div className="syndicate-card p-8">
            <p className="text-base md:text-lg text-syndicate-text-main leading-relaxed">
              A principios de los 2000, un colectivo privado de analistas y jugadores de high-stakes se propuso resolver el Baccarat. No con corazonadas, sino con pura lógica matemática y disciplina conductual. Crearon un manual de operaciones interno.
            </p>
            
            <p className="text-base md:text-lg text-syndicate-text-main leading-relaxed mt-6">
              El acceso a su círculo y a este conocimiento costaba 10.000 USD y exigía un acuerdo de confidencialidad absoluto. Durante dos décadas, funcionó en las sombras.
            </p>
            
            <p className="text-base md:text-lg text-syndicate-text-main leading-relaxed mt-6">
              Ahora, las circunstancias han cambiado, y los guardianes originales del sistema han autorizado una liberación única y limitada de este conocimiento. Lo que antes era el privilegio de una élite, ahora puede ser tu manual de operaciones.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Story; 