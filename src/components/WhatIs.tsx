import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const deliverables = [
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
    title: "El Manual del Sistema (PDF)",
    description: "La guía esencial que desglosa el sistema matemático para Baccarat, con explicaciones claras, ejemplos prácticos y estrategias de aplicación para maximizar tus ganancias."
  }
];

const WhatIs = () => {
  return (
    <section id="what-is" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Qué Incluye tu Acceso al Sistema Matemático de Baccarat?
          </h2>
          <p className="text-xl text-yellow-400 max-w-3xl mx-auto font-semibold">
            Más que un ebook, es una metodología completa para transformar tu juego. Esto es lo que obtendrás al unirte hoy:
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8 justify-items-center"> {/* Changed to grid-cols-1 and added justify-items-center */}
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-glass flex items-start gap-6 p-6 rounded-2xl border border-yellow-500/10 shadow-lg max-w-md"
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