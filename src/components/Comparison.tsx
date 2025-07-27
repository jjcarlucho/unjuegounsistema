import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, BarChart, DollarSign, Brain, TrendingUp } from 'lucide-react';

const comparisonData = [
  { 
    feature: "Método", 
    ourSystem: "Basado en Matemáticas y Probabilidad", 
    alternatives: "Basado en Suerte, Intuición o Supersticiones"
  },
  { 
    feature: "Resultados", 
    ourSystem: "Consistentes y Verificables", 
    alternatives: "Aleatorios e Inconsistentes"
  },
  { 
    feature: "Riesgo", 
    ourSystem: "Gestionado y Minimizado", 
    alternatives: "Alto y Descontrolado"
  },
  { 
    feature: "Costo Real", 
    ourSystem: "$17 (Inversión Única)", 
    alternatives: "Pérdidas Constantes y Frustración"
  },
  { 
    feature: "Mentalidad", 
    ourSystem: "Estratégica y Disciplinada", 
    alternatives: "Impulsiva y Emocional"
  },
];

const Comparison = () => {
  return (
    <section id="comparison" className="py-28 bg-transparent relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            La Elección es Clara:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Nuestro Sistema Matemático vs. el Azar
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deja de depender de la suerte. Descubre por qué nuestro método es la única opción lógica para resultados consistentes en el Baccarat.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="premium-glass rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-3 font-bold text-white text-center text-lg bg-gray-800/50 p-4">
            <div className="text-left">Característica</div>
            <div>Nuestro Sistema</div>
            <div>Alternativas Comunes</div>
          </div>

          {comparisonData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
              className="grid grid-cols-3 items-center text-center p-4 border-t border-gray-700/50"
            >
              <div className="text-left font-semibold text-gray-300">{item.feature}</div>
              <div className="flex flex-col items-center text-green-400">
                <CheckCircle className="w-6 h-6 mb-1" />
                <span>{item.ourSystem}</span>
              </div>
              <div className="flex flex-col items-center text-red-400">
                <XCircle className="w-6 h-6 mb-1" />
                <span>{item.alternatives}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center mt-12 bg-gray-800/50 p-6 rounded-xl border border-gray-700/50"
        >
            <p className="text-2xl font-light text-cyan-300 italic">
              La decisión es tuya: ¿Seguirás dejando tus resultados al azar, o tomarás el control con la certeza de las matemáticas?
            </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Comparison;