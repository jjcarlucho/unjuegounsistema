import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Star, TrendingUp, Users } from 'lucide-react';

interface UltraHeroProps {
  onCTAClick?: () => void;
}

const UltraHero: React.FC<UltraHeroProps> = ({ onCTAClick }) => {
  const [currentProof, setCurrentProof] = useState(0);
  
  const socialProofs = [
    { message: "Nunca había visto algo tan innovador y efectivo", name: "Carlos M." },
    { message: "Este método es completamente nuevo, jamás lo había encontrado", name: "Ana L." },
    { message: "Increíble lo novedoso que es este sistema matemático", name: "Roberto S." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProof((prev) => (prev + 1) % socialProofs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      // Fallback a WhatsApp si no se proporciona onCTAClick
      const message = encodeURIComponent("🔥 QUIERO ACCEDER AL SISTEMA MATEMÁTICO AHORA. He visto que tiene 98% de efectividad y quiero empezar a generar resultados inmediatos. ¿Cuál es el siguiente paso?");
      window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">
      {/* Fondo sutil y rápido */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-purple-500/5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Contenido */}
          <div className="text-center lg:text-left">
            
            {/* Badge de urgencia simple */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm mb-8 border border-red-400"
            >
              <Zap size={16} />
              🔥 ÚLTIMOS 7 CUPOS DISPONIBLES
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                UN JUEGO.
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                UN SISTEMA.
              </span>
            </motion.h1>

            {/* Subtítulo potente */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl text-white font-bold mb-8"
            >
              El método matemático <span className="text-emerald-400">SECRETO</span> con{' '}
              <span className="text-green-400 font-black">98% de efectividad</span>
            </motion.p>



            {/* Prueba social rotativa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gray-800/50 rounded-2xl p-6 mb-8 border border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
                <span className="text-emerald-400 font-bold text-sm ml-2">VERIFICADO ✓</span>
              </div>
              <motion.div
                key={currentProof}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white font-bold text-lg mb-2">
                  "<span className="text-green-400">{socialProofs[currentProof].message}</span>"
                </p>
                <p className="text-gray-400">- {socialProofs[currentProof].name}</p>
              </motion.div>
            </motion.div>

            {/* CTA principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-6"
            >
              <button
                onClick={handleCTAClick}
                className="w-full lg:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-2xl py-6 px-12 rounded-2xl transition-all duration-300 shadow-xl border-2 border-emerald-400 flex items-center justify-center gap-3 group"
              >
                <Zap size={28} className="group-hover:animate-pulse" />
                ACCEDE A LA PREVENTA HOY
              </button>
            </motion.div>

            {/* Garantías simples */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm"
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <Shield size={16} />
                <span className="font-bold">Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Clock size={16} />
                <span className="font-bold">Acceso inmediato</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Star size={16} />
                <span className="font-bold">Soporte 24/7</span>
              </div>
            </motion.div>
          </div>

          {/* Columna derecha - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
              
              {/* Container del libro */}
              <div className="relative bg-gray-800/30 rounded-3xl p-6 border border-gray-700 backdrop-blur-sm">
                <img
                  src="/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg"
                  alt="UN JUEGO. UN SISTEMA. - Método Matemático Secreto"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
                
                {/* Badge de precio limpio */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-4 rounded-xl font-black border-2 border-pink-400 shadow-xl">
                  <div className="text-center">
                    <p className="text-sm line-through opacity-75">$47</p>
                    <p className="text-2xl">$17</p>
                    <p className="text-xs font-bold text-pink-200">PREVENTA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UltraHero;
