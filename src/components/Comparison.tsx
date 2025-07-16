import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const yesItems = [
  "Control absoluto sobre cada decisión",
  "Estrategia basada en matemáticas",
  "Números, patrones y probabilidades",
  "Disciplina y paciencia",
  "Ganancias consistentes y medibles",
  "Enfoque profesional y sistemático"
];

const noItems = [
  "Depender del azar o la suerte",
  "Decisiones basadas en emociones",
  "Impulsividad y adrenalina",
  "Esperanza de 'golpes de suerte'",
  "Pérdidas incontrolables",
  "Mentalidad de entretenimiento"
];

const Comparison = () => {
  return (
    <section className="py-28 bg-transparent relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Para quién <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">SÍ es</span> y para quién <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">NO es</span> esta preventa
          </h2>
          <p className="text-xl text-yellow-400 max-w-3xl mx-auto font-semibold">
            Esto NO es para todos. Solo para los primeros que se atrevan a descubrir la verdad antes que el resto del mundo.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* What it IS */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.06, boxShadow: '0 0 32px #3be13b88' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="premium-glass bg-gradient-to-br from-green-900/10 to-green-800/10 p-10 rounded-2xl border border-green-500/20 shadow-xl cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-500 rounded-lg">
                <Check className="w-6 h-6 text-white group-hover:animate-green-glow" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 font-serif">ESTO SÍ</h3>
            </div>
            <div className="space-y-4">
              {yesItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* What it is NOT */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.06, boxShadow: '0 0 32px #e13b3b88' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="premium-glass bg-gradient-to-br from-red-900/10 to-red-800/10 p-10 rounded-2xl border border-red-500/20 shadow-xl cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-500 rounded-lg">
                <X className="w-6 h-6 text-white group-hover:animate-red-glow" />
              </div>
              <h3 className="text-2xl font-bold text-red-400 font-serif">ESTO NO</h3>
            </div>
            <div className="space-y-4">
              {noItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <div className="text-center mt-20">
          <p className="text-2xl font-light text-yellow-400 italic">
            "La diferencia entre los insiders y el resto está en el acceso anticipado. ¿De qué lado quieres estar?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;