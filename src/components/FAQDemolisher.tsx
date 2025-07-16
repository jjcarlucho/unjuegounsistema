import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, Shield, DollarSign, Clock, Target, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQDemolisher: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: DollarSign,
      question: "¿Es realmente posible ganar $25,000 USD con este sistema?",
      answer: "NO solo es posible, es INEVITABLE si sigues el sistema al pie de la letra. Tenemos documentación de usuarios que han generado entre $15,000 y $45,000 USD en sus primeros 30 días. El sistema está matemáticamente diseñado para generar ganancias consistentes. La pregunta no es SI vas a ganar, sino CUÁNTO vas a ganar.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      question: "¿Cuánto tiempo necesito dedicarle diariamente?",
      answer: "Solo 2-3 horas al día son suficientes para generar ingresos de 5 cifras mensuales. Muchos de nuestros usuarios más exitosos trabajan solo 1 hora por la mañana y 1 hora por la noche. El sistema está diseñado para personas ocupadas que quieren resultados máximos con tiempo mínimo. NO necesitas dedicar tu vida entera a esto.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      question: "¿Funciona para principiantes sin experiencia?",
      answer: "¡ESPECIALMENTE para principiantes! De hecho, los principiantes obtienen mejores resultados porque no tienen 'malos hábitos' que desaprender. El sistema es tan simple que un niño de 12 años podría aplicarlo. Incluye videos paso a paso, ejemplos reales y soporte 24/7. Tu falta de experiencia es una VENTAJA, no un obstáculo.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      question: "¿Qué pasa si no funciona para mí?",
      answer: "IMPOSIBLE que no funcione si sigues las instrucciones. Pero si por alguna razón cósmica no obtienes resultados en 30 días, no solo te devolvemos tu dinero completo, sino que te PAGAMOS $500 USD adicionales por las molestias. Tenemos tanta confianza en el sistema que estamos dispuestos a PAGARTE por probarlo.",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      question: "¿Por qué no lo venden por $100,000 si es tan efectivo?",
      answer: "Excelente pregunta. Podríamos venderlo por $100,000 fácilmente, pero queremos crear un ejército de personas exitosas, no solo unos pocos millonarios. Además, entre más personas usen el sistema correctamente, más datos recopilamos para mejorarlo. Es una inversión a largo plazo en nuestra comunidad de ganadores.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      question: "¿Cuándo veré mis primeros resultados?",
      answer: "Los primeros resultados los verás en las primeras 24-48 horas de aplicar el sistema. No estamos hablando de 'resultados pequeños', sino de ganancias reales y tangibles. El 89% de nuestros usuarios recupera su inversión en la primera semana. El sistema está diseñado para generar resultados INMEDIATOS, no en meses.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("💡 He leído las FAQ y estoy convencido. Quiero acceder al sistema matemático AHORA y empezar a generar resultados inmediatos.");
    window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 mb-6">
            DESTRUYENDO OBJECIONES
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-3xl mx-auto">
            Las preguntas que TODOS hacen antes de cambiar su vida financiera para siempre:
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${faq.color} shadow-lg`}>
                    <faq.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="text-gray-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className={`bg-gradient-to-r ${faq.color} bg-opacity-10 rounded-xl p-6 border-l-4 border-gradient-to-b ${faq.color.replace('from-', 'border-').replace(' to-emerald-600', '').replace(' to-cyan-600', '').replace(' to-pink-600', '').replace(' to-orange-600', '').replace(' to-purple-600', '')}`}>
                        <p className="text-gray-300 text-lg leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA final demoledor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 border-2 border-green-400">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              🎯 ¿TODAS TUS DUDAS RESUELTAS? 🎯
            </h3>
            <p className="text-xl text-green-100 font-bold mb-6">
              Perfecto. Ahora es momento de ACTUAR y cambiar tu vida financiera para siempre.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-black text-xl py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-yellow-400 mb-4"
            >
              💰 SÍ, QUIERO CAMBIAR MI VIDA AHORA 💰
            </button>
            
            <p className="text-green-200 text-sm font-bold">
              ⚡ Sin más excusas, sin más dudas, solo RESULTADOS ⚡
            </p>
          </div>
        </motion.div>

        {/* Estadística final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-lg font-bold">
            📊 El 94% de las personas que leen estas FAQ terminan adquiriendo el sistema
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQDemolisher;
