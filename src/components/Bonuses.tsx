import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Zap } from 'lucide-react';

const bonuses = [
  {
    icon: <img src="https://www.thegamechangerbooks.com/images/yourwishisyourcommand.avif" alt="Your Wish Is Your Command" className="w-10 h-10" />,
    title: "Bono Exclusivo #1: Su Deseo Es Su Mandato",
    description: "Una legendaria serie de audios sobre mentalidad, manifestación y la Ley de Atracción aplicada a los negocios. Esta colección exclusiva te entrena para pensar como un creador de realidad, no como un esclavo de proyectos. Imagina transformar tu mentalidad para manifestar el éxito en los negocios. Estos audios te guían en la aplicación de la Ley de Atracción a tus esfuerzos empresariales, enseñándote a crear la realidad que deseas. Imagínate pasando de un lugar de limitación a uno de potencial ilimitado. A medida que integres estos principios, comenzarás a ver oportunidades que antes no notabas, atraerás colaboradores afines y te alinearás naturalmente con tus objetivos comerciales, haciendo que el camino hacia el éxito sea más intuitivo y menos estresante.",
    value: "$500"
  },
  {
    icon: <img src="https://www.thegamechangerbooks.com/images/Gemini_Generated_Image_nyf0pqnyf0pqnyf0.jpeg" alt="TFT Course" className="w-10 h-10" />,
    title: "Bono Exclusivo #2: Curso TFT (Thought Field Therapy)",
    description: "Aprende a liberar bloqueos subconscientes y emociones que sabotean tu progreso con esta poderosa técnica de transformación personal. Perfecto para emprendedores conscientes que quieren vender desde su centro, sin miedo ni autosabotaje. Imagina poder eliminar los obstáculos mentales y emocionales que te frenan. Este curso te equipa con técnicas para identificar y liberar bloqueos subconscientes, permitiéndote abordar los negocios desde un lugar de confianza y autenticidad. Visualiza la libertad de operar sin miedo ni autosabotaje, permitiendo que tu verdadera pasión y propósito brillen en tus ofertas. A medida que estos bloqueos se disuelvan, encontrarás una mayor alineación en tus acciones, lo que te llevará a conexiones más genuinas con tus clientes y un mayor éxito en tus esfuerzos.",
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
