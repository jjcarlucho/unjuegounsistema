import React, { useState } from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Si el sistema es tan bueno, por qué lo venden?",
      answer: "Los creadores originales generaron su valor hace décadas. Su objetivo actual no es el juego, sino la liberación controlada de su legado. Esta venta limitada financia esa misión, permitiendo que el conocimiento perdure en lugar de desaparecer."
    },
    {
      question: "¿Esto garantiza que voy a ganar dinero?",
      answer: "No, y cualquier persona que te garantice eso miente. Esto es un sistema profesional de gestión de riesgo y toma de decisiones, no una máquina de imprimir dinero. Aumenta drásticamente tu ventaja y disciplina, pero el resultado final siempre dependerá de tu ejecución y de la varianza inherente al juego."
    },
    {
      question: "¿Es esto legal?",
      answer: "Absolutamente. No es un dispositivo electrónico ni un método de trampa. Es una estrategia de pensamiento y gestión, similar a cómo un jugador de póker profesional usa las matemáticas y la psicología a su favor."
    },
    {
      question: "¿Por qué es anónimo?",
      answer: "El anonimato fue una condición no negociable de los guardianes originales del sistema. Su interés no es la fama, sino la preservación de la integridad del método. La fuerza del sistema reside en su lógica, no en el nombre de su creador."
    }
  ];

  return (
    <section id="faq" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-quantum-amber-accent" />
              <h2 className="text-fluid-h2 font-serif font-bold">
                Preguntas Frecuentes
              </h2>
            </div>
            <p className="text-quantum-text-dim">
              Todo lo que necesitas saber sobre el sistema
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-in-left" 
                delay={index * 200}
                className="quantum-card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className={`text-lg font-sans font-semibold pr-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-quantum-green-cta' : 'text-quantum-text-bright'
                  }`}>
                    {faq.question}
                  </h3>
                  <span className="text-quantum-amber-accent">
                    {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-quantum-border">
                    <p className="text-quantum-text-dim leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default FAQ; 