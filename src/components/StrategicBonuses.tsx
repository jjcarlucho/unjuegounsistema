import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Zap, Crown } from 'lucide-react';

const StrategicBonuses = () => {
  const bonuses = [
    {
      id: 1,
      name: 'Su Deseo Es Su Mandato',
      originalPrice: 297,
      description: 'Acceso exclusivo al legendario entrenamiento "Your Wish Is Your Command". Descubre el secreto mejor guardado de la élite mundial para manifestar deseos, riqueza y éxito. Este audio-seminario, grabado en un retiro privado en los Alpes suizos, revela cómo activar la frecuencia cerebral THETA ("la onda de los millonarios") para atraer dinero, salud, amor y poder simplemente con tus pensamientos.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
      highlights: [
        'Técnicas de manifestación de la élite mundial',
        'Activación de frecuencia cerebral THETA',
        'Grabado en retiro privado en los Alpes suizos',
        'Validado por neurociencia moderna'
      ],
      color: 'from-purple-600 to-indigo-700',
      icon: Crown
    },
    {
      id: 2,
      name: 'Tapping (TFT/EFT)',
      originalPrice: 200,
      description: 'El método Tapping (TFT/EFT): Libera tu potencial y elimina bloqueos en minutos. Accede a la técnica de liberación emocional y reprogramación mental utilizada por atletas de élite, empresarios y terapeutas de todo el mundo. El Tapping combina acupresión y psicología energética para ayudarte a superar miedos, estrés, ansiedad, creencias limitantes y traumas… en minutos.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center',
      highlights: [
        'Técnica usada por atletas de élite',
        'Elimina bloqueos emocionales en minutos',
        'Combina acupresión y psicología energética',
        'Supera miedos y creencias limitantes'
      ],
      color: 'from-emerald-600 to-teal-700',
      icon: Zap
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/5 to-emerald-900/10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <Gift className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-bold">BONOS EXCLUSIVOS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Pero eso no es todo... <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">¡Recibe estos bonos GRATIS!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estos bonos premium solo están disponibles durante la preventa. Una vez que termine, <span className="text-red-400 font-bold">NUNCA más volverán a ofrecerse</span>.
          </p>
        </motion.div>

        {/* Bonos */}
        <div className="space-y-12">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-r ${bonus.color} rounded-3xl p-1 shadow-2xl`}
            >
              <div className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Imagen */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${bonus.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                      <img
                        src={bonus.image}
                        alt={bonus.name}
                        className="relative z-10 w-full h-64 object-cover rounded-2xl shadow-xl border-2 border-white/10"
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`bg-gradient-to-r ${bonus.color} rounded-full p-3 shadow-lg`}>
                          <bonus.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`bg-gradient-to-r ${bonus.color} rounded-full p-2`}>
                        <Gift className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-yellow-400 font-bold text-sm">BONO #{bonus.id}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {bonus.name}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-gradient-to-r ${bonus.color} rounded-lg px-4 py-2`}>
                        <span className="text-white font-black text-xl">${bonus.originalPrice} USD</span>
                      </div>
                      <div className="bg-green-600 rounded-lg px-4 py-2">
                        <span className="text-white font-bold">GRATIS HOY</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {bonus.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-lg flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        Lo que incluye:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {bonus.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resumen de valor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-3xl p-8 border-2 border-yellow-400 text-center"
        >
          <h3 className="text-3xl font-black text-white mb-4">
            🎁 VALOR TOTAL DE LOS BONOS: $497 USD
          </h3>
          <p className="text-xl text-yellow-100 font-bold mb-6">
            Pero hoy los recibes <span className="text-4xl text-white">COMPLETAMENTE GRATIS</span>
          </p>
          <div className="bg-white/20 rounded-2xl p-4 inline-block">
            <p className="text-white font-bold text-lg">
              Sistema ($47) + Bonos ($497) = <span className="line-through">$544 USD</span>
            </p>
            <p className="text-yellow-300 font-black text-2xl mt-2">
              Tu precio hoy: $17 USD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicBonuses;
