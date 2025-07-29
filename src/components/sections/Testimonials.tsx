import React from 'react';
import Container from '../layout/Container';
import AnimatedSection from '../AnimatedSection';
import InteractiveCard from '../InteractiveCard';
import { Star, Quote, CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Diego Ramírez",
      location: "México D.F., México",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Llevaba 3 años perdiendo dinero en Baccarat. En solo 2 semanas con el sistema, recuperé todo y ahora tengo una ventaja real. Es increíble cómo algo tan simple puede cambiar todo.",
      verified: true
    },
    {
      name: "Ana Sofía Mendoza",
      location: "Bogotá, Colombia", 
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Siempre fui escéptica con estos sistemas, pero este es diferente. La disciplina que enseña es lo que realmente funciona. Ya no juego por impulso.",
      verified: true
    },
    {
      name: "Luis Fernando Torres",
      location: "Lima, Perú",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "El sistema me salvó de la ruina. Ahora tengo control total sobre mis emociones y mis ganancias. Es como tener un GPS en el casino.",
      verified: true
    },
    {
      name: "Valentina Herrera",
      location: "Santiago, Chile",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Por fin entiendo que el Baccarat no es suerte, es matemáticas. El sistema me dio las herramientas para pensar como un profesional.",
      verified: true
    },
    {
      name: "Miguel Ángel Castro",
      location: "Buenos Aires, Argentina",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Después de 15 años de pérdidas, encontré este sistema. En 3 meses he generado más ganancias que en toda mi vida jugando.",
      verified: true
    },
    {
      name: "Isabella Rodríguez",
      location: "Caracas, Venezuela",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "La parte mental es lo más valioso. Ahora veo el juego como un negocio, no como entretenimiento. Los resultados hablan por sí solos.",
      verified: true
    }
  ];

  return (
    <section id="testimonios" className="py-section bg-quantum-dark">
      <Container>
        <AnimatedSection animation="slide-up" className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-fluid-h2 font-serif font-bold mb-4">
              Lo Que Dicen Los Que Ya Lo Aplican
            </h2>
            <div className="inline-block bg-quantum-green-cta/10 px-4 py-2 rounded-full border border-quantum-green-cta/20 mb-6">
              <span className="text-quantum-green-cta font-semibold text-sm">
                ✅ VERIFICADO Y CERTIFICADO
              </span>
            </div>
            <p className="text-quantum-text-dim text-lg max-w-3xl mx-auto">
              Cientos de jugadores ya han mejorado su enfoque al Baccarat usando este sistema.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-in-left" 
                delay={index * 200}
              >
                <InteractiveCard className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    {/* Header con avatar y info */}
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-quantum-green-cta/20"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-quantum-text-bright font-semibold">
                            {testimonial.name}
                          </h3>
                          {testimonial.verified && (
                            <CheckCircle className="w-4 h-4 text-quantum-green-cta" />
                          )}
                        </div>
                        <p className="text-quantum-text-dim text-sm">
                          {testimonial.location}
                        </p>
                      </div>

                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-quantum-amber-accent fill-current" />
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <div className="flex-1">
                      <Quote className="w-5 h-5 text-quantum-green-cta/50 mb-2" />
                      <p className="text-quantum-text-dim leading-relaxed text-sm">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                  </div>
                </InteractiveCard>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Estadísticas */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="quantum-card p-6">
                <div className="text-3xl font-bold text-quantum-green-cta mb-2">847</div>
                <div className="text-quantum-text-dim">Usuarios Activos</div>
              </div>
              <div className="quantum-card p-6">
                <div className="text-3xl font-bold text-quantum-green-cta mb-2">89%</div>
                <div className="text-quantum-text-dim">Satisfacción</div>
              </div>
              <div className="quantum-card p-6">
                <div className="text-3xl font-bold text-quantum-green-cta mb-2">6.2</div>
                <div className="text-quantum-text-dim">Promedio de Sesiones</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Testimonials; 