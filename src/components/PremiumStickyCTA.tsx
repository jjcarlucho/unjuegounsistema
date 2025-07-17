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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Estadísticas en tiempo real */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="text-emerald-400" size={16} />
                    <span className="text-emerald-400 font-bold text-sm">{currentViewers}</span>
                  </div>
                  <p className="text-gray-300 text-xs">viendo ahora</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="text-red-400" size={16} />
                    <span className="text-red-400 font-bold text-sm">{spotsLeft}</span>
                  </div>
                  <p className="text-gray-300 text-xs">cupos restantes</p>
                </div>
              </div>

              {/* Contador de tiempo */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock className="text-cyan-400 animate-pulse" size={16} />
                  <span className="text-cyan-400 font-black text-lg">{formatTime(timeLeft)}</span>
                </div>
                <p className="text-gray-300 text-xs font-bold">para cierre definitivo</p>
              </div>

              {/* Precio */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-lg px-4 py-2 inline-block">
                  <p className="text-white text-xs line-through opacity-75">$47</p>
                  <p className="text-white font-black text-xl">$17</p>
                  <p className="text-pink-200 text-xs font-bold">PREVENTA</p>
                </div>
              </div>

              {/* CTA principal */}
              <div className="text-center md:text-right">
                <motion.button
                  onClick={handleCTAClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl border-2 border-emerald-400 flex items-center justify-center gap-3 mx-auto md:mx-0 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Crown className="relative z-10 animate-pulse" size={20} />
                  <span className="relative z-10">ASEGURAR MI CUPO</span>
                  <Zap className="relative z-10 animate-bounce" size={20} />
                </motion.button>
              </div>
            </div>

            {/* Mensaje de urgencia */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-3"
            >
              <p className="text-red-400 text-sm font-bold animate-pulse">
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
