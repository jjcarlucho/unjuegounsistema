import React from 'react';
import { Shield, Clock, Award, Zap, CheckCircle, Star, Lock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const GuaranteeBadges: React.FC = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "GARANTÍA BLINDADA",
      subtitle: "100% Satisfacción",
      description: "Si no obtienes resultados en 30 días, te devolvemos TODO tu dinero + $500 USD por las molestias",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Clock,
      title: "GARANTÍA TEMPORAL",
      subtitle: "Acceso de por Vida",
      description: "Una vez que adquieres el sistema, es tuyo PARA SIEMPRE. Sin pagos mensuales ni renovaciones",
      color: "from-blue-500 to-cyan-600",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Award,
      title: "GARANTÍA DE RESULTADOS",
      subtitle: "98% de Precisión",
      description: "Matemáticamente probado en más de 500,000 shoes. Los números no mienten, los resultados hablan",
      color: "from-yellow-500 to-orange-600",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Zap,
      title: "GARANTÍA DE VELOCIDAD",
      subtitle: "Resultados Inmediatos",
      description: "Empiezas a ver ganancias desde la primera aplicación. No necesitas meses de práctica",
      color: "from-purple-500 to-pink-600",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  const trustBadges = [
    {
      icon: CheckCircle,
      text: "Método Verificado",
      subtext: "500K+ Aplicaciones"
    },
    {
      icon: Star,
      text: "Calificación 5★",
      subtext: "Miles de Usuarios"
    },
    {
      icon: Lock,
      text: "100% Seguro",
      subtext: "Transacción Protegida"
    },
    {
      icon: TrendingUp,
      text: "Resultados Probados",
      subtext: "98% Efectividad"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-6">
            GARANTÍAS BLINDADAS
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-4xl mx-auto">
            Tu inversión está 100% protegida. Estas son nuestras garantías IRREVOCABLES:
          </p>
        </motion.div>

        {/* Garantías principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${guarantee.bgColor} rounded-3xl p-8 border-2 ${guarantee.borderColor} hover:scale-105 transition-all duration-300 group overflow-hidden`}
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${guarantee.color} shadow-lg`}>
                    <guarantee.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">
                      {guarantee.title}
                    </h3>
                    <p className={`text-lg font-bold bg-gradient-to-r ${guarantee.color} bg-clip-text text-transparent`}>
                      {guarantee.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700"
        >
          <h3 className="text-3xl font-black text-center text-white mb-8">
            🏆 RESPALDADO POR LA EXCELENCIA 🏆
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl mb-3 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="text-black" size={24} />
                </div>
                <p className="text-white font-bold text-sm mb-1">{badge.text}</p>
                <p className="text-gray-400 text-xs">{badge.subtext}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 border-2 border-green-400 inline-block">
            <p className="text-white font-black text-xl mb-2">
              💎 GARANTÍA TOTAL DE SATISFACCIÓN 💎
            </p>
            <p className="text-green-100 text-lg">
              Tu éxito está garantizado o te devolvemos tu dinero + $500 USD extra
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeBadges;
