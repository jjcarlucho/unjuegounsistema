import React from 'react';
import { TrendingUp, Shield, Brain, Target } from 'lucide-react';
import SectionTitle from './SectionTitle';

const features = [
  {
    icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
    title: "Sistema matemático con 98% de precisión",
    description: "Basado en patrones matemáticos verificados"
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    title: "Resultados en 1 semana (depende del caso)",
    description: "Tiempo promedio para ver primeros resultados"
  },
  {
    icon: <Brain className="w-6 h-6 text-yellow-400" />,
    title: "Basado en datos reales, no en suerte",
    description: "Análisis estadístico de millones de shoes"
  },
  {
    icon: <Target className="w-6 h-6 text-yellow-400" />,
    title: "Inversión mínima desde $100 USD",
    description: "Puedes empezar con el monto que desees (depende del caso)"
  }
];

const WhatIs = () => {
  return (
    <section className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-glass p-12 rounded-2xl border border-yellow-500/10 shadow-xl text-center">
          <div className="flex justify-center mb-6">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" stroke="#D4AF37" strokeWidth="3" fill="#23262F" /><path d="M24 14v12l8 4" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Por qué esta <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">oportunidad única</span> es tan exclusiva?
          </h2>
          <p className="text-xl text-yellow-400 max-w-2xl mx-auto font-semibold">
            Solo los primeros en acceder a la preventa podrán descubrir el método matemático que ha sido ocultado durante décadas. Precio normal $47, pero en preventa solo $17. Esta es tu oportunidad de entrar antes que el resto del mundo, con acceso anticipado y bonos irrepetibles.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-black/20 rounded-xl border border-yellow-500/10">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIs;