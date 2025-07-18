import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, Users, TrendingUp, X, Crown } from 'lucide-react';

interface PremiumStickyCTAProps {
  onCTAClick?: () => void;
}

const PremiumStickyCTA: React.FC<PremiumStickyCTAProps> = ({ onCTAClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(7);
  const [currentViewers, setCurrentViewers] = useState(247);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Aparece después de 50% de scroll
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 3600; // Reset cuando llega a 0
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentViewers(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        const newValue = prev + change;
        return Math.max(200, Math.min(300, newValue));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      // Fallback a WhatsApp si no se proporciona onCTAClick
      const message = encodeURIComponent("🚨 ¡QUIERO ASEGURAR MI CUPO AHORA! He visto toda la información y estoy completamente convencido. ¿Cuál es el proceso exacto para acceder al sistema matemático inmediatamente?");
      window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-gray-900 to-black border-t-4 border-emerald-400 shadow-2xl backdrop-blur-md"
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-purple-500/10 animate-pulse"></div>
          
          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors z-10 p-2"
          >
            <X size={20} />
          </button>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

              {/* Sección izquierda - Lo que obtienes */}
              <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-600">
                <h3 className="text-emerald-400 font-black text-lg mb-3 flex items-center gap-2">
                  🎯 LO QUE OBTIENES HOY
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">💰</span>
                    <span className="text-white text-sm">Sistema Matemático Completo</span>
                    <span className="text-gray-400 text-xs ml-auto">Valor: $47 USD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">🎁</span>
                    <span className="text-white text-sm">Bonos Exclusivos Incluidos</span>
                    <span className="text-gray-400 text-xs ml-auto">Valor: $497 USD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">⚡</span>
                    <span className="text-white text-sm">Soporte VIP 24/7</span>
                    <span className="text-gray-400 text-xs ml-auto">Acceso directo al creador</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm line-through">Valor Total: $844 USD</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-green-400 font-black text-xl">Tu Precio: $17 USD</span>
                    <p className="text-yellow-400 text-sm font-bold">¡Ahorras $827 USD!</p>
                  </div>
                </div>
              </div>

              {/* Sección central - CTA principal */}
              <div className="text-center">
                <motion.button
                  onClick={handleCTAClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-xl py-6 px-8 rounded-2xl transition-all duration-300 shadow-xl border-2 border-emerald-400 flex items-center justify-center gap-3 mx-auto relative overflow-hidden group w-full max-w-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Zap className="relative z-10 animate-pulse" size={24} />
                  <span className="relative z-10">ACCEDE A LA PREVENTA HOY</span>
                  <Zap className="relative z-10 animate-pulse" size={24} />
                </motion.button>

                <div className="mt-3 space-y-1">
                  <p className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-1">
                    ⚡ Respuesta inmediata garantizada
                  </p>
                  <p className="text-green-400 text-xs flex items-center justify-center gap-1">
                    ✅ Al hacer clic, te conectas directamente por WhatsApp
                  </p>
                  <p className="text-green-400 text-xs flex items-center justify-center gap-1">
                    ✅ Recibes el acceso en menos de 5 minutos
                  </p>
                  <p className="text-green-400 text-xs flex items-center justify-center gap-1">
                    ✅ Empiezas a generar resultados HOY mismo
                  </p>
                </div>
              </div>

              {/* Sección derecha - Advertencia */}
              <div className="bg-red-900/30 rounded-2xl p-4 border-2 border-red-500">
                <h3 className="text-red-400 font-black text-lg mb-3 flex items-center gap-2">
                  ⚠️ ADVERTENCIA FINAL
                </h3>
                <p className="text-white text-sm mb-4">
                  Si sales de esta página sin actuar, perderás esta oportunidad PARA SIEMPRE.
                </p>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="text-cyan-400 animate-pulse" size={20} />
                    <span className="text-cyan-400 font-black text-2xl">{formatTime(timeLeft)}</span>
                  </div>
                  <p className="text-gray-300 text-sm font-bold">para cierre definitivo</p>

                  <div className="mt-3 bg-red-600 rounded-lg px-3 py-2">
                    <p className="text-white text-sm font-bold">$47</p>
                    <p className="text-white font-black text-lg">$17</p>
                    <p className="text-red-200 text-xs font-bold">PREVENTA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensaje de urgencia final */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-4 bg-yellow-600/20 rounded-lg py-2 px-4 border border-yellow-500/30"
            >
              <p className="text-yellow-400 font-bold text-sm animate-pulse">
                ⚠️ Una vez agotados los cupos, el acceso se cierra PARA SIEMPRE ⚠️
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiumStickyCTA;
