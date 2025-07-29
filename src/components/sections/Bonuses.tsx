import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import InteractiveCard from '../InteractiveCard';
import { Brain, Zap, Star } from 'lucide-react';

const Bonuses: React.FC = () => {
  const bonuses = [
    {
      icon: Brain,
      title: "Tu Deseo Es Tu Mandato",
      description: "Una legendaria serie de audios sobre mentalidad, manifestación y la Ley de la Atracción aplicada a los negocios. Esta colección exclusiva te entrena para pensar como un creador de tu realidad, no como un esclavo de tus proyectos. Imagina transformar tu mentalidad para manifestar el éxito en tus empresas. Estos audios te guían en la aplicación de la Ley de la Atracción a tus esfuerzos emprendedores, enseñándote a crear la realidad que deseas.",
      value: "VALORADO EN: $500 USD",
      iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Curso de TFT (Thought Field Therapy)",
      description: "Aprende a liberar los bloqueos y emociones subconscientes que sabotean tu progreso con esta poderosa técnica de transformación personal. Es perfecta para emprendedores conscientes que desean vender desde su centro, sin miedo ni auto-sabotaje. Imagina ser capaz de despejar los obstáculos mentales y emocionales que te frenan. Este curso te equipa con técnicas para identificar y liberar bloqueos subconscientes, permitiéndote abordar tus objetivos con un enfoque claro y decidido.",
      value: "VALORADO EN: $297 USD",
      iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <section id="bonos" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-fluid-h2 font-serif font-bold mb-4">
              Dos Herramientas de Maestría Mental para Asegurar tu Ejecución.
            </h2>
            <div className="inline-block bg-quantum-green-cta/10 px-4 py-2 rounded-full border border-quantum-green-cta/20">
              <span className="text-quantum-green-cta font-semibold text-sm">
                🎁 INCLUIDOS GRATIS
              </span>
            </div>
          </div>
          
          <div className="quantum-card p-8 mb-12">
            <p className="text-base md:text-lg text-quantum-text-dim leading-relaxed text-center">
              El Sistema te proporciona el mapa. Estos bonos legendarios forjan la disciplina de acero necesaria para seguirlo sin desviaciones, convirtiendo tu mente en tu mayor aliado.
            </p>
          </div>
          
          <div className="space-y-12">
            {bonuses.map((bonus, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-in-left" 
                delay={index * 300}
              >
                <InteractiveCard className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Icono del Bono */}
                    <div className="lg:col-span-1">
                      <div className="relative">
                        <div className={`w-full h-48 lg:h-64 rounded-2xl shadow-2xl flex items-center justify-center ${bonus.iconBg}`}>
                          <bonus.icon className={`w-24 h-24 ${bonus.iconColor}`} />
                        </div>
                        <div className="absolute top-4 right-4 bg-quantum-amber-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-quantum-dark font-bold text-sm">
                            {bonus.value}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenido del Bono */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="text-quantum-amber-accent">
                          <bonus.icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-quantum-text-bright">
                          {bonus.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-quantum-text-dim leading-relaxed">
                        {bonus.description}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-quantum-amber-accent fill-current" />
                          ))}
                        </div>
                        <span className="text-quantum-text-bright font-semibold">Premium</span>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="quantum-card p-8 inline-block">
              <p className="text-quantum-text-bright font-bold text-2xl md:text-3xl">
                🎯 Valor Total de los Bonos: <span className="text-quantum-green-cta text-3xl md:text-4xl">$797 USD</span>
              </p>
              <p className="text-quantum-text-dim text-base md:text-lg mt-3 font-medium">
                Incluidos GRATIS solo durante la preventa
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Bonuses; 