import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Zap } from 'lucide-react';

const bonuses = [
  {
    icon: <Gift className="w-10 h-10 text-purple-400" />,
    title: "Bono Exclusivo #1: Su Deseo Es Su Mandato",
    description: "Este entrenamiento de élite, valorado en $500, te enseñará a alinear tu mentalidad para el éxito financiero. Descubre cómo manifestar tus objetivos y superar las barreras mentales que te impiden alcanzar la riqueza. Es la clave para transformar tu enfoque no solo en el juego, sino en todas las áreas de tu vida.",
    value: "$500"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
    title: "Bono Exclusivo #2: Tapping (TFT/EFT) para Jugadores de Alto Rendimiento",
    description: "Valorado en $297, esta poderosa técnica de liberación emocional te permitirá eliminar el miedo, la ansiedad y el estrés que a menudo acompañan al juego. Aprende a mantener la calma bajo presión, a tomar decisiones claras y a operar con una mente enfocada y libre de bloqueos emocionales. Indispensable para cualquier jugador serio.",
    value: "$297"
  }
];

const Bonuses = () => {
  return (
    <section id="bonuses" className="py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-emerald-500/5"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            BONOS EXCLUSIVOS DE PREVENTA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              ¡Valor Total de $797, GRATIS Hoy!
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Al acceder hoy al sistema matemático de Baccarat, te llevas completamente GRATIS estos dos bonos transformadores que potenciarán tus resultados y tu mentalidad.
          </p>
        </motion.div>

        <div className="space-y-12 mb-16"> {/* Changed to space-y-12 for vertical layout */}
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="premium-glass flex flex-col md:flex-row items-center md:items-start gap-8 p-8 rounded-3xl border border-gray-700/50 shadow-lg hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 bg-gray-800/50 p-5 rounded-full border border-gray-700">
                {bonus.icon}
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-3xl font-bold text-white font-serif mb-3">
                  {bonus.title}
                </h3>
                <p className="text-gray-400 text-lg mb-4">
                  {bonus.description}
                </p>
                <div className="mt-auto">
                  <span className="text-xl font-bold text-yellow-400 bg-yellow-900/50 py-2 px-4 rounded-lg border border-yellow-700/50">
                    Valor: {bonus.value}
                  </span>
                  <span className="block text-green-400 font-bold mt-3 text-lg">
                    GRATIS HOY
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center border-2 border-green-400/50 relative overflow-hidden"
        >
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 opacity-50 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            <p className="text-white text-2xl mb-2">Accede a todo el sistema + los 2 bonos (valor total de $797)</p>
            <div className="flex items-center justify-center gap-4">
                <p className="text-5xl font-black text-white">Hoy por solo</p>
                <p className="text-6xl font-black text-yellow-300 animate-pulse">$17</p>
            </div>
            <div className="mt-6">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-slate-900 font-bold text-2xl py-4 px-10 rounded-xl shadow-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                >
                    <Zap className="w-6 h-6" />
                    ¡QUIERO ACCESO INSTANTÁNEO!
                </motion.button>
                <p className="text-white/70 mt-3 text-sm">Garantía de 30 días. Acceso inmediato. Compra 100% segura.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Bonuses;
