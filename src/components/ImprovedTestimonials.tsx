import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle, Play, Quote, Calendar, MapPin, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    location: 'Ciudad de México, México',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'Ingeniero de Software',
    date: '15 de Enero, 2024',
    rating: 5,
    quote: 'Después de 3 años probando diferentes métodos, este es el único que realmente funciona. La precisión matemática es impresionante.',
    result: 'Recuperé mi inversión en 4 días',
    verified: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop',
    hasVideo: true
  },
  {
    id: 2,
    name: 'Ana Lucía Rodríguez',
    location: 'Bogotá, Colombia',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    role: 'Contadora Pública',
    date: '8 de Febrero, 2024',
    rating: 5,
    quote: 'Como contadora, aprecio los números. Este sistema tiene una lógica matemática sólida que realmente genera resultados consistentes.',
    result: 'Método aplicado con éxito en 12 sesiones',
    verified: true,
    videoThumbnail: null,
    hasVideo: false
  },
  {
    id: 3,
    name: 'Roberto Silva',
    location: 'Madrid, España',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Analista Financiero',
    date: '22 de Febrero, 2024',
    rating: 5,
    quote: 'Trabajo en finanzas y puedo confirmar que la metodología es sólida. No es suerte, es matemática pura aplicada correctamente.',
    result: 'Precisión del 94% en mis primeras 20 aplicaciones',
    verified: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
    hasVideo: true
  },
  {
    id: 4,
    name: 'María Elena Vásquez',
    location: 'Lima, Perú',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    role: 'Profesora de Matemáticas',
    date: '5 de Marzo, 2024',
    rating: 5,
    quote: 'Como profesora de matemáticas, quedé fascinada con la elegancia del sistema. Es educativo y efectivo a la vez.',
    result: 'Entendí el sistema en 2 horas de estudio',
    verified: true,
    videoThumbnail: null,
    hasVideo: false
  },
  {
    id: 5,
    name: 'Diego Fernández',
    location: 'Buenos Aires, Argentina',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    role: 'Empresario',
    date: '18 de Marzo, 2024',
    rating: 5,
    quote: 'He invertido en muchos sistemas. Este es diferente: tiene fundamento matemático real y resultados verificables.',
    result: 'ROI positivo desde la primera semana',
    verified: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
    hasVideo: true
  },
  {
    id: 6,
    name: 'Sofía Morales',
    location: 'Santiago, Chile',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    role: 'Analista de Datos',
    date: '2 de Abril, 2024',
    rating: 5,
    quote: 'Analicé los datos del sistema durante semanas antes de comprarlo. Los patrones matemáticos son consistentes y replicables.',
    result: 'Validé la efectividad con 50+ pruebas',
    verified: true,
    videoThumbnail: null,
    hasVideo: false
  }
];

const ImprovedTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const nextTestimonial = () => {
    setSelectedTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSelectedTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[selectedTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 px-6 py-3 rounded-full border border-emerald-500/30 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">TESTIMONIOS VERIFICADOS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              usuarios reales
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profesionales de diferentes áreas que han aplicado el método matemático con resultados verificables.
          </p>
        </motion.div>

        {/* Testimonial principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl backdrop-blur-sm mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Contenido del testimonial */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Quote className="text-emerald-400" size={24} />
                <div className="flex">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                {currentTestimonial.verified && (
                  <div className="flex items-center gap-1 bg-green-600/20 px-2 py-1 rounded-full">
                    <CheckCircle size={14} className="text-green-400" />
                    <span className="text-green-400 text-xs font-bold">VERIFICADO</span>
                  </div>
                )}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  
                  <div className="bg-emerald-600/20 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="text-emerald-400" size={16} />
                      <span className="text-emerald-400 font-bold text-sm">RESULTADO:</span>
                    </div>
                    <p className="text-emerald-300 font-bold">{currentTestimonial.result}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-emerald-400 object-cover"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                      <p className="text-emerald-400 font-medium">{currentTestimonial.role}</p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mt-1">
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span>{currentTestimonial.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{currentTestimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Video o imagen */}
            <div className="relative">
              {currentTestimonial.hasVideo ? (
                <div className="relative group cursor-pointer" onClick={() => setShowVideoModal(true)}>
                  <img
                    src={currentTestimonial.videoThumbnail}
                    alt="Video testimonial"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    VIDEO TESTIMONIAL
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-2xl p-8 h-64 flex items-center justify-center border border-emerald-500/30">
                  <div className="text-center">
                    <CheckCircle className="text-emerald-400 mx-auto mb-4" size={48} />
                    <p className="text-emerald-300 font-bold text-lg">Testimonial Verificado</p>
                    <p className="text-gray-400 text-sm mt-2">Usuario real del sistema</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navegación */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-200"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === selectedTestimonial
                      ? 'bg-emerald-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-200"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Grid de testimonials pequeños */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-emerald-400 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              
              <p className="text-gray-300 text-sm line-clamp-3">"{testimonial.quote}"</p>
              
              <div className="mt-4 text-emerald-400 text-xs font-bold">
                {testimonial.result}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImprovedTestimonials;
