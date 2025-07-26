import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Gift, Globe, Clock, Users, Zap, Shield, Star } from 'lucide-react';

const bonuses = [
  {
    icon: BookOpen,
    title: 'Sistema Matemático Completo',
    description: 'El método matemático completo explicado paso a paso.',
    price: '$47 USD',
    status: 'included',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Gift,
    title: 'Bono: Su Deseo Es Su Mandato',
    description: 'Entrenamiento exclusivo para manifestar riqueza y éxito',
    price: '$500 USD',
    status: 'bonus',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Gift,
    title: 'Bono: Tapping (TFT)',
    description: 'Técnica de liberación emocional y reprogramación mental',
    price: '$297 USD',
    status: 'bonus',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Garantía de 30 días',
    description: 'Si no funciona, te devolvemos tu dinero completo',
    price: 'Incluido',
    status: 'guarantee',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Users,
    title: 'Soporte Exclusivo',
    description: 'Acceso directo para resolver dudas y consultas',
    price: 'Incluido',
    status: 'support',
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: Zap,
    title: 'Resultados en Primera Semana',
    description: 'Si aplicas el método correctamente (depende del caso)',
    price: 'Promedio',
    status: 'result',
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Funciona en la Mayoría de Países',
    description: 'Sistema adaptable a diferentes mercados',
    price: 'Global',
    status: 'global',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Clock,
    title: 'No Requiere Experiencia',
    description: 'Perfecto para principiantes, no necesitas saber nada',
    price: 'Fácil',
    status: 'easy',
    color: 'from-pink-400 to-purple-500'
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Bonuses = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que obtienes cuando{' '}
            <span className="text-yellow-400">compras</span>{' '}
            <span className="text-green-400">hoy</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            No es solo un ebook. Es un sistema completo con bonos valorados en{' '}
            <span className="text-yellow-400 font-bold text-2xl">$844 USD</span>
          </p>
        </motion.div>

        {/* Grid de bonos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            
            const getStatusColor = (status: string) => {
              switch (status) {
                case 'included': return 'text-yellow-400';
                case 'bonus': return 'text-green-400';
                case 'guarantee': return 'text-purple-400';
                case 'support': return 'text-orange-400';
                case 'result': return 'text-red-400';
                case 'global': return 'text-cyan-400';
                case 'easy': return 'text-pink-400';
                default: return 'text-gray-400';
              }
            };

            const getStatusText = (status: string) => {
              switch (status) {
                case 'included': return bonus.price;
                case 'bonus': return 'GRATIS HOY';
                case 'guarantee': return 'Incluido';
                case 'support': return 'Incluido';
                case 'result': return 'Promedio';
                case 'global': return 'Global';
                case 'easy': return 'Fácil';
                default: return bonus.price;
              }
            };

            return (
              <motion.div
                key={index}
                variants={card}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${bonus.color} rounded-lg mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                  {bonus.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {bonus.description}
                </p>
                
                <div className={`font-bold text-lg ${getStatusColor(bonus.status)}`}>
                  {getStatusText(bonus.status)}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Valor total destacado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 md:p-8 text-center mb-12 border-2 border-green-400/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-emerald-500/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🎯</span>
              </div>
              <span className="text-white/90 font-bold text-lg">VALOR TOTAL: $844 USD</span>
            </div>

            <div className="text-center">
              <p className="text-white/90 text-xl mb-2">Solo por hoy: <span className="text-yellow-300 font-black text-3xl">$17 USD</span></p>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <div className="w-4 h-4 bg-green-300 rounded-full flex items-center justify-center">
                  <span className="text-green-800 text-xs">✓</span>
                </div>
                <span>Acceso inmediato después del pago</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bono especial Su Deseo Es Su Mandato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-3xl p-8 md:p-12 border-2 border-purple-500/50 relative overflow-hidden mb-12"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-violet-500/10"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg">
                <Gift size={24} className="text-white" />
              </div>
              <span className="text-purple-400 font-bold text-lg">BONO #1</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-2xl p-8 border border-purple-500/30">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop&crop=center"
                    alt="Su Deseo Es Su Mandato"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white p-3 rounded-full">
                    <Star size={24} />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Su Deseo Es Su Mandato
                </h3>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                    $500 USD
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                    GRATIS HOY
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Acceso exclusivo al legendario entrenamiento "Your Wish Is Your Command".
                  Descubre el secreto mejor guardado de la élite mundial para manifestar deseos,
                  riqueza y éxito. Este audio-seminario, grabado en un retiro privado en los Alpes
                  suizos, revela cómo activar la frecuencia cerebral THETA ("la onda de los millonarios")
                  para atraer dinero, salud, amor y poder simplemente con tus pensamientos.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Star size={16} className="text-yellow-400" />
                    <span className="font-semibold">Lo que incluye:</span>
                  </div>

                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Técnicas de manifestación de la élite mundial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Activación de frecuencia cerebral THETA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Grabado en retiro privado en los Alpes suizos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Validado por neurociencia moderna</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bono especial Tapping */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-3xl p-8 md:p-12 border-2 border-emerald-500/50 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg">
                <Gift size={24} className="text-white" />
              </div>
              <span className="text-emerald-400 font-bold text-lg">BONO #2</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Tapping (TFT/EFT)
                </h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold">
                    $297 USD
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                    GRATIS HOY
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  El método Tapping (TFT/EFT): Libera tu potencial y elimina bloqueos en minutos. 
                  Accede a la técnica de liberación emocional y reprogramación mental utilizada por 
                  atletas de élite, empresarios y terapeutas de todo el mundo. El Tapping combina 
                  acupresión y psicología energética para ayudarte a superar miedos, estrés, ansiedad, 
                  creencias limitantes y traumas... en minutos.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Star size={16} className="text-yellow-400" />
                    <span className="font-semibold">Lo que incluye:</span>
                  </div>
                  
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Técnica usada por atletas de élite</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Elimina bloqueos emocionales en minutos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Combina acupresión y psicología energética</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span>Supera miedos y creencias limitantes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl p-8 border border-emerald-500/30">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop&crop=center"
                    alt="Tapping technique"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white p-3 rounded-full">
                    <Zap size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonuses;
