import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Gift, Shield, Users, Zap, Globe, Clock, CheckCircle } from 'lucide-react';

const WhatYouGet = () => {
  const items = [
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      title: "Sistema Matemático Completo",
      description: "El método matemático completo explicado paso a paso",
      value: "$47 USD"
    },
    {
      icon: <Gift className="w-8 h-8 text-green-400" />,
      title: "Bono: Su Deseo Es Su Mandato",
      description: "Entrenamiento exclusivo para manifestar riqueza y éxito",
      value: "$500 USD"
    },
    {
      icon: <Gift className="w-8 h-8 text-blue-400" />,
      title: "Bono: Tapping (TFT)",
      description: "Técnica de liberación emocional y reprogramación mental",
      value: "$297 USD"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Garantía de 30 días",
      description: "Si no funciona, te devolvemos tu dinero completo",
      value: "Incluido"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "Soporte Exclusivo",
      description: "Acceso directo para resolver dudas y consultas",
      value: "Incluido"
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: "Resultados en Primera Semana",
      description: "Si aplicas y lees el libro correctamente",
      value: "Garantizado"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Funciona en la Mayoría de Países",
      description: "Sistema adaptable a diferentes mercados",
      value: "Global"
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-400" />,
      title: "No Requiere Experiencia",
      description: "Perfecto para principiantes, no necesitas saber nada",
      value: "Fácil"
    }
  ];

  const totalValue = 841; // Valor total de todo el paquete

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Lo que obtienes cuando <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">compras hoy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No es solo un ebook. Es un sistema completo con bonos valorados en <span className="text-yellow-400 font-bold">${totalValue} USD</span>
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-800 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {item.description}
                </p>
                <div className="bg-gradient-to-r from-yellow-500/20 to-green-500/20 px-3 py-1 rounded-full">
                  <span className="text-yellow-400 font-bold text-sm">
                    {item.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resumen de valor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 border-2 border-green-400 text-center"
        >
          <h3 className="text-3xl font-black text-white mb-4">
            🎯 VALOR TOTAL: ${totalValue} USD
          </h3>
          <p className="text-xl text-green-100 font-bold mb-6">
            Solo por hoy: <span className="text-4xl text-yellow-300">$17 USD</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-green-200">
            <CheckCircle className="w-5 h-5" />
            <span className="font-bold">Acceso inmediato después del pago</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
