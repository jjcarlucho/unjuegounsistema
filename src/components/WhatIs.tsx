import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ListChecks, Video, Users } from 'lucide-react';

const deliverables = [
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
    title: "El Manual del Sistema (PDF de 75 páginas)",
    description: "La guía completa que desglosa el método matemático paso a paso, con explicaciones claras y ejemplos visuales."
  },
  {
    icon: <ListChecks className="w-8 h-8 text-yellow-400" />,
    title: "Checklist de Ejecución en 5 Minutos",
    description: "Una hoja de ruta simplificada para aplicar el sistema rápidamente antes de cualquier decisión, asegurando que no te saltes ningún paso."
  },
  {
    icon: <Video className="w-8 h-8 text-yellow-400" />,
    title: "Módulo de Estudios de Caso en Video",
    description: "Análisis en video de 10 escenarios reales, mostrando cómo se aplicó el sistema para obtener ganancias y cómo evitar errores comunes."
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Acceso a la Comunidad de 'Ejecutores'",
    description: "Un grupo privado y exclusivo para discutir estrategias, compartir resultados y recibir apoyo de otros miembros que están aplicando el sistema."
  }
];

const WhatIs = () => {
  return (
    <section id="what-is" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Qué Recibes Exactamente al Acceder Hoy?
          </h2>
          <p className="text-xl text-yellow-400 max-w-3xl mx-auto font-semibold">
            Esto no es solo un libro. Es un sistema completo, diseñado para ser implementado de inmediato. Esto es todo lo que obtienes:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
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