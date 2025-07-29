import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import InteractiveCard from '../InteractiveCard';
import { Brain, Shield, Clock, Zap } from 'lucide-react';

const Content: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: "El Algoritmo de Decisión Binaria",
      description: "El núcleo del sistema que elimina el 99% de las dudas en cada mano."
    },
    {
      icon: Shield,
      title: "La Gestión de Capital 'Caja Fuerte'",
      description: "El protocolo exacto para definir apuestas, objetivos de ganancia y límites de pérdida antes de sentarte en la mesa."
    },
    {
      icon: Clock,
      title: "El Ciclo de la Mesa y la Paciencia Estratégica",
      description: "Aprende a identificar cuándo NO jugar, la habilidad más rentable de todas."
    },
    {
      icon: Zap,
      title: "Disciplina Emocional y Ejecución Robótica",
      description: "Las herramientas mentales para operar el sistema sin desviaciones, inmune al pánico o la euforia."
    }
  ];

  return (
    <section id="beneficios" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-fluid-h2 font-serif font-bold mb-4">
              Dentro del Manual de Operaciones Desclasificado.
            </h2>
            <div className="inline-block bg-quantum-amber-accent/10 px-4 py-2 rounded-full border border-quantum-amber-accent/20 mb-6">
              <span className="text-quantum-amber-accent font-semibold text-sm">
                ⚡ SISTEMA ALGORÍTMICO
              </span>
            </div>
          </div>
          
          <div className="quantum-card p-8 mb-12">
            <p className="text-base md:text-lg text-quantum-text-dim leading-relaxed text-center">
              Esto no es una colección de 'consejos'. Es un sistema de ejecución algorítmica diseñado para ser operado con precisión robótica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-in-left" 
                delay={index * 100}
              >
                <InteractiveCard className="text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-quantum-green-cta/10 p-4 rounded-full">
                      <pillar.icon className="w-8 h-8 text-quantum-green-cta" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-quantum-text-bright">
                      {pillar.title}
                    </h3>
                    <p className="text-quantum-text-dim leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Content; 