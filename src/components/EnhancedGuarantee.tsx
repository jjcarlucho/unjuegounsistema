import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, DollarSign, Award, Lock, Zap } from 'lucide-react';

const EnhancedGuarantee = () => {
  const guaranteeFeatures = [
    {
      icon: Clock,
      title: '60 Días Completos',
      description: 'Tiempo suficiente para probar el sistema completamente',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      title: 'Reembolso Total + $50 USD',
      description: 'Si no funciona, recuperas tu dinero + compensación',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Sin Preguntas',
      description: 'Proceso simple, sin complicaciones ni justificaciones',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Lock,
      title: '100% Seguro',
      description: 'Procesado por Stripe, la plataforma más segura del mundo',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonialSteps = [
    {
      step: 1,
      title: 'Compra el Sistema',
      description: 'Acceso inmediato por solo $17 USD',
      icon: Zap
    },
    {
      step: 2,
      title: 'Prueba Durante 60 Días',
      description: 'Aplica el método y verifica los resultados',
      icon: Clock
    },
    {
      step: 3,
      title: 'Resultados o Reembolso',
      description: 'Si no funciona, recuperas todo + $50 USD extra',
      icon: DollarSign
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900/20 via-green-900/10 to-emerald-900/20 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-green-500/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
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
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">GARANTÍA BLINDADA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Garantía de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              60 días + $50 USD extra
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos tan seguros de que el sistema funcionará para ti, que si no obtienes resultados, 
            no solo te devolvemos tu dinero, sino que te pagamos $50 USD adicionales por tu tiempo.
          </p>
        </motion.div>

        {/* Garantía principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-emerald-800/30 to-green-800/30 rounded-3xl p-8 md:p-12 border-2 border-emerald-500/50 shadow-2xl backdrop-blur-sm mb-16 relative overflow-hidden"
        >
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mb-6">
                <Shield size={40} className="text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                GARANTÍA TOTAL DE 60 DÍAS
              </h3>
              
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 mb-6">
                <p className="text-2xl md:text-3xl font-black text-white">
                  $17 USD → $67 USD si no funciona
                </p>
                <p className="text-green-100 font-bold mt-2">
                  Recuperas tu inversión + $50 USD de compensación
                </p>
              </div>
              
              <p className="text-xl text-emerald-100 font-medium">
                "Si en 60 días no has obtenido resultados positivos con el sistema matemático, 
                no solo te devolvemos los $17 USD, sino que te pagamos $50 USD adicionales 
                por haberte hecho perder el tiempo."
              </p>
            </div>

            {/* Features de la garantía */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guaranteeFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-gray-800/50 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Proceso paso a paso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Cómo Funciona Nuestra Garantía
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-black text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                  
                  {index < testimonialSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500 to-transparent transform -translate-x-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonial de garantía */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-emerald-500/20 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="text-emerald-400" size={24} />
            <span className="text-emerald-400 font-bold">GARANTÍA VERIFICADA</span>
          </div>
          
          <blockquote className="text-xl text-white font-medium mb-4">
            "Solicité el reembolso después de 45 días porque no estaba obteniendo los resultados esperados. 
            No solo me devolvieron los $17 USD inmediatamente, sino que recibí $50 USD adicionales. 
            Increíble nivel de confianza en su producto."
          </blockquote>
          
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
              alt="Usuario verificado"
              className="w-12 h-12 rounded-full border-2 border-emerald-400"
            />
            <div className="text-left">
              <p className="text-white font-bold">Miguel R.</p>
              <p className="text-emerald-400 text-sm">Reembolso procesado en 24h</p>
            </div>
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-emerald-400 mb-4">
            ¿Qué tienes que perder? ¡Literalmente NADA!
          </p>
          <p className="text-gray-300 text-lg">
            En el peor de los casos, ganas $50 USD. En el mejor, cambias tu vida financiera para siempre.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedGuarantee;
