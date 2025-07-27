import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ListChecks, TrendingUp, Brain } from 'lucide-react';

const deliverables = [
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
    title: "El Sistema Matemático Completo para Baccarat (Ebook PDF)",
    description: "Sumérgete en los principios matemáticos y estadísticos que rigen el Baccarat. Este ebook no solo te revela el sistema, sino que te enseña a pensar como un analista, identificando patrones y tomando decisiones basadas en datos, no en la suerte. Incluye explicaciones claras, diagramas y ejemplos prácticos para una comprensión profunda."
  },
  {
    icon: <ListChecks className="w-8 h-8 text-yellow-400" />,
    title: "Guía de Implementación Paso a Paso",
    description: "Aprende a aplicar el sistema en cada mano de Baccarat con nuestra guía detallada. Desde la identificación de oportunidades hasta la ejecución de tus jugadas, esta sección te asegura que dominarás la aplicación práctica del método, minimizando errores y maximizando tu ventaja."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
    title: "Estrategias Avanzadas de Gestión de Riesgo",
    description: "Descubre cómo proteger tu capital y asegurar la sostenibilidad de tus ganancias. Este módulo te enseña a gestionar tu bankroll de forma inteligente, a identificar cuándo retirarte y a evitar las trampas emocionales que arruinan a la mayoría de los jugadores. Convierte el riesgo en una variable controlable."
  },
  {
    icon: <Brain className="w-8 h-8 text-yellow-400" />,
    title: "Transformación de Mentalidad: De Apostador a Inversor",
    description: "Este sistema no solo cambia tu forma de jugar, sino tu forma de pensar. Te proporcionamos las herramientas mentales para operar con disciplina, objetividad y confianza, eliminando la impulsividad y el miedo. Desarrolla la mentalidad de un inversor profesional que toma decisiones lógicas y estratégicas."
  }
];

const WhatIs = () => {
  return (
    <section id="what-is" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Tu Acceso Exclusivo al Sistema Matemático de Baccarat Incluye:
          </h2>
          <p className="text-xl text-yellow-400 max-w-3xl mx-auto font-semibold">
            Esto es lo que recibirás para transformar tu enfoque en el Baccarat y jugar con una ventaja real:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8"> {/* Changed to grid-cols-2 */}
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-glass flex items-start gap-6 p-6 rounded-2xl border border-yellow-500/10 shadow-lg"
            >
              <div className="flex-shrink-0 bg-yellow-400/10 p-4 rounded-full border border-yellow-500/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 font-serif mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIs;