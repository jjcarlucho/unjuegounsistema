import React, { useState } from 'react';
import { ChevronDown, ChevronUp, DollarSign, Clock, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UltraFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: DollarSign,
      question: "¿Realmente puedo ganar $25,000+ USD?",
      answer: "SÍ. Tenemos documentación de usuarios que han generado entre $15,000 y $89,500 USD en sus primeros 30 días. El sistema está matemáticamente diseñado para generar ganancias consistentes con 98% de precisión.",
    },
    {
      icon: Clock,
      question: "¿Cuánto tiempo necesito dedicarle?",
      answer: "Solo 2-3 horas al día son suficientes. El sistema está diseñado para personas ocupadas que quieren resultados máximos con tiempo mínimo. Muchos usuarios trabajan solo 1 hora por la mañana y 1 hora por la noche.",
    },
    {
      icon: Shield,
      question: "¿Qué pasa si no funciona para mí?",
      answer: "IMPOSIBLE que no funcione si sigues las instrucciones. Pero si por alguna razón no obtienes resultados en 30 días, te devolvemos tu dinero completo + $500 USD adicionales por las molestias.",
    },
    {
      icon: Zap,
      question: "¿Cuándo veré mis primeros resultados?",
      answer: "Los primeros resultados los verás en las primeras 24-48 horas. El 89% de nuestros usuarios recupera su inversión en la primera semana. El sistema está diseñado para generar resultados INMEDIATOS.",
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("💡 He leído las FAQ y estoy convencido. Quiero acceder al sistema matemático AHORA y empezar a generar resultados inmediatos.");
    window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-xl text-gray-300 font-bold">
            Las dudas más comunes antes de cambiar tu vida financiera:
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500">
                    <faq.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {faq.question}
                  </h3>
                </div>
                {openFAQ === index ? (
                  <ChevronUp className="text-gray-400" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
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
                      <div className="bg-emerald-600/10 rounded-xl p-4 border-l-4 border-emerald-500">
                        <p className="text-gray-300 text-lg leading-relaxed">
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

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-8 border-2 border-emerald-400">
            <h3 className="text-3xl font-black text-white mb-4">
              🎯 ¿TODAS TUS DUDAS RESUELTAS?
            </h3>
            <p className="text-xl text-emerald-100 font-bold mb-6">
              Perfecto. Ahora es momento de ACTUAR y cambiar tu vida financiera.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-white hover:bg-gray-100 text-emerald-700 font-black text-xl py-4 px-8 rounded-xl transition-all duration-300 shadow-xl"
            >
              💰 SÍ, QUIERO CAMBIAR MI VIDA AHORA
            </button>
            
            <p className="text-emerald-200 text-sm font-bold mt-4">
              ⚡ Sin más excusas, sin más dudas, solo RESULTADOS
            </p>
          </div>
        </motion.div>

        {/* Estadística final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
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

export default UltraFAQ;
