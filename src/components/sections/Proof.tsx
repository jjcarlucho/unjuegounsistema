import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import InteractiveCard from '../InteractiveCard';
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const Proof: React.FC = () => {
  return (
    <section id="prueba" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-fluid-h2 font-serif font-bold mb-4">
              La Evidencia: Orden vs. Caos
            </h2>
            <div className="inline-block bg-quantum-green-cta/10 px-4 py-2 rounded-full border border-quantum-green-cta/20 mb-6">
              <span className="text-quantum-green-cta font-semibold text-sm">
                📊 SIMULACIÓN DE 200 ZAPATOS
              </span>
            </div>
            <p className="text-quantum-text-dim text-lg max-w-3xl mx-auto">
              Dos caminos, dos resultados. La misma simulación con diferentes enfoques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* El Caos del Impulso */}
            <AnimatedSection animation="slide-in-left" delay={200}>
              <InteractiveCard className="p-8 border-l-4 border-red-500">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icono */}
                  <div className="bg-red-500/10 p-6 rounded-full">
                    <TrendingDown className="w-16 h-16 text-red-500" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-quantum-text-bright mb-4">
                      El Caos del Impulso
                    </h3>
                    <p className="text-lg text-quantum-text-dim leading-relaxed">
                      Decisiones basadas en emociones, corazonadas y rachas. La línea roja muestra la realidad: picos de falsa esperanza seguidos de caídas devastadoras. Un camino errático hacia la ruina.
                    </p>
                  </div>
                  
                  {/* Indicadores de resultado */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-red-400">Pérdida Promedio: -€2,400</span>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>
            
            {/* El Orden del Sistema */}
            <AnimatedSection animation="slide-in-right" delay={400}>
              <InteractiveCard className="p-8 border-l-4 border-quantum-green-cta">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icono */}
                  <div className="bg-quantum-green-cta/10 p-6 rounded-full">
                    <TrendingUp className="w-16 h-16 text-quantum-green-cta" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-quantum-text-bright mb-4">
                      El Orden del Sistema
                    </h3>
                    <p className="text-lg text-quantum-text-dim leading-relaxed">
                      Aplicación rigurosa del protocolo. La línea verde muestra disciplina: crecimiento controlado, gestión de pérdidas y una trayectoria que se aleja del abismo.
                    </p>
                  </div>
                  
                  {/* Indicadores de resultado */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-quantum-green-cta" />
                      <span className="text-quantum-green-cta">Ganancia Promedio: +€3,200</span>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </AnimatedSection>
          </div>
          
          {/* Pregunta final */}
          <div className="text-center mt-12">
            <div className="quantum-card p-8 inline-block">
              <h3 className="text-2xl font-serif font-bold text-quantum-text-bright mb-4">
                La Pregunta es Simple
              </h3>
              <p className="text-xl text-quantum-green-cta font-semibold">
                ¿Qué camino quieres seguir?
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Proof; 