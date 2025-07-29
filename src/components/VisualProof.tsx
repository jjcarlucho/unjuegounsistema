import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart3, Target, Zap } from 'lucide-react';

const VisualProof: React.FC = () => {
  return (
    <section id="visual-proof" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-red-400/30 to-transparent rounded-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            La Prueba Visual que Destruye el Escepticismo
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Los números no mienten. Observa cómo la disciplina matemática supera al caos del juego impulsivo en una simulación de 200 zapatos de Baccarat.
          </p>
        </motion.div>

        {/* Gráfico Comparativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="premium-glass rounded-2xl border border-gray-700/50 shadow-xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Evolución del Bankroll: Sistema vs. Impulso</h3>
            <p className="text-gray-400">Simulación de 200 zapatos con bankroll inicial de 1,000 unidades</p>
          </div>

          {/* Gráfico SVG */}
          <div className="relative h-96 bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
            <svg className="w-full h-full" viewBox="0 0 800 300">
              {/* Ejes */}
              <line x1="50" y1="250" x2="750" y2="250" stroke="#374151" strokeWidth="2" />
              <line x1="50" y1="50" x2="50" y2="250" stroke="#374151" strokeWidth="2" />
              
              {/* Etiquetas de ejes */}
              <text x="400" y="280" textAnchor="middle" fill="#9CA3AF" fontSize="14">Número de Zapatos Jugados</text>
              <text x="25" y="150" textAnchor="middle" fill="#9CA3AF" fontSize="14" transform="rotate(-90, 25, 150)">Capital (en Unidades)</text>
              
              {/* Marcas del eje Y */}
              <text x="35" y="255" textAnchor="end" fill="#6B7280" fontSize="12">500</text>
              <text x="35" y="200" textAnchor="end" fill="#6B7280" fontSize="12">750</text>
              <text x="35" y="150" textAnchor="end" fill="#6B7280" fontSize="12">1000</text>
              <text x="35" y="100" textAnchor="end" fill="#6B7280" fontSize="12">1250</text>
              <text x="35" y="50" textAnchor="end" fill="#6B7280" fontSize="12">1500</text>
              
              {/* Línea de referencia en 1000 */}
              <line x1="50" y1="150" x2="750" y2="150" stroke="#374151" strokeWidth="1" strokeDasharray="5,5" />
              
              {/* Línea Roja - Juego por Impulso (El Caos) */}
              <path
                d="M 50 150 L 80 120 L 110 180 L 140 90 L 170 200 L 200 70 L 230 160 L 260 110 L 290 190 L 320 60 L 350 170 L 380 100 L 410 180 L 440 80 L 470 160 L 500 90 L 530 170 L 560 70 L 590 150 L 620 100 L 650 180 L 680 60 L 710 140 L 740 90 L 750 120"
                stroke="#FF0000"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Línea Azul - El Sistema (El Orden) */}
              <path
                d="M 50 150 L 80 145 L 110 155 L 140 140 L 170 160 L 200 135 L 230 165 L 260 130 L 290 170 L 320 125 L 350 175 L 380 120 L 410 180 L 440 115 L 470 185 L 500 110 L 530 190 L 560 105 L 590 195 L 620 100 L 650 200 L 680 95 L 710 205 L 740 90 L 750 110"
                stroke="#0055FF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Leyenda */}
              <rect x="600" y="20" width="12" height="12" fill="#FF0000" />
              <text x="620" y="30" fill="#FF0000" fontSize="14" fontWeight="bold">Juego por Impulso</text>
              
              <rect x="600" y="40" width="12" height="12" fill="#0055FF" />
              <text x="620" y="50" fill="#0055FF" fontSize="14" fontWeight="bold">Juego con "El Sistema"</text>
            </svg>
          </div>
        </motion.div>

        {/* Análisis del Gráfico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Análisis de la Línea Roja (El Caos) */}
          <div className="premium-glass p-6 rounded-xl border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-red-400">El Caos del Juego Impulsivo</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-red-400">Trayectoria Volátil:</strong> Observa los picos agudos hacia arriba 
                (falsas esperanzas) seguidos de caídas devastadoras. Esta es la realidad del juego basado en corazonadas.
              </p>
              <p>
                <strong className="text-red-400">Pérdida Inevitable:</strong> A pesar de los momentos de "suerte", 
                la tendencia es claramente descendente. De 1,000 unidades iniciales a apenas 600-700 al final.
              </p>
              <p>
                <strong className="text-red-400">Patrón Reconocible:</strong> ¿Te resulta familiar? Es exactamente 
                lo que has experimentado: ganancias temporales que se evaporan, dejándote peor que cuando empezaste.
              </p>
            </div>
          </div>

          {/* Análisis de la Línea Azul (El Orden) */}
          <div className="premium-glass p-6 rounded-xl border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-400">El Orden del Sistema Matemático</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-blue-400">Crecimiento Controlado:</strong> Fluctuaciones menores, 
                pequeñas pérdidas gestionadas y una tendencia de crecimiento estable y sostenido.
              </p>
              <p>
                <strong className="text-blue-400">Resultado Final:</strong> De 1,000 unidades iniciales 
                a 1,300-1,400 al final. Un incremento del 30-40% en el mismo período.
              </p>
              <p>
                <strong className="text-blue-400">Disciplina Matemática:</strong> No es una línea recta 
                (eso sería irreal), pero cada fluctuación está controlada y la tendencia es inequívocamente positiva.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conclusión Ineludible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-red-500/10 to-blue-500/10 p-8 rounded-2xl border border-gray-700/50"
        >
          <div className="flex justify-center mb-4">
            <BarChart3 className="w-12 h-12 text-yellow-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            La Conclusión es Ineludible
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            En el mismo período de tiempo, con el mismo bankroll inicial, el sistema matemático 
            <strong className="text-yellow-400"> multiplica tu capital</strong> mientras el juego impulsivo 
            <strong className="text-red-400"> lo destruye</strong>. Los números no mienten.
          </p>
          <p className="text-lg text-gray-400 italic">
            La diferencia no está en la suerte, sino en la aplicación rigurosa de principios matemáticos 
            que transforman el azar en una variable controlable.
          </p>
        </motion.div>

        {/* Nota de Intriga */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-400/10 px-6 py-4 rounded-full border border-yellow-500/30">
            <Zap className="w-6 h-6 text-yellow-400" />
            <p className="text-yellow-400 font-semibold">
              ¿Cuál es la lógica interna que hace posible esta diferencia? 
              <span className="text-white ml-2">Descúbrela en "Un Juego, Un Sistema"</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualProof; 