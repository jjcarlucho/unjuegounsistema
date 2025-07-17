import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Zap, AlertTriangle, TrendingUp } from 'lucide-react';

interface TimedNotificationPopupProps {
  onCTAClick?: () => void;
}

const TimedNotificationPopup: React.FC<TimedNotificationPopupProps> = ({ onCTAClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutos
  const [currentViewers, setCurrentViewers] = useState(247);

  // Mostrar popup después de 1 minuto
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 60000); // 60 segundos

    return () => clearTimeout(timer);
  }, []);

  // Contador de tiempo
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 1800; // Reset cuando llega a 0
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Simulación de viewers
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentViewers(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        const newValue = prev + change;
        return Math.max(200, Math.min(300, newValue));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    }
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-red-900 via-red-800 to-black rounded-3xl p-8 max-w-lg w-full border-2 border-red-500 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/5 to-yellow-500/10 animate-pulse"></div>
            
            {/* Botón cerrar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              {/* Header con urgencia */}
              <div className="text-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full border border-red-400 mb-4"
                >
                  <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
                  <span className="text-white font-bold text-sm">¡ATENCIÓN URGENTE!</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  🚨 ¡Estás a punto de perder esta oportunidad!
                </h3>
                <p className="text-red-200">
                  Has estado {Math.floor(Math.random() * 5) + 3} minutos en esta página...
                </p>
              </div>

              {/* Estadísticas en tiempo real */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 rounded-xl p-4 text-center border border-red-500/30">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="text-red-400" size={20} />
                    <span className="text-red-400 font-bold text-lg">{currentViewers}</span>
                  </div>
                  <p className="text-gray-300 text-sm">personas viendo ahora</p>
                </div>
                
                <div className="bg-black/30 rounded-xl p-4 text-center border border-red-500/30">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="text-orange-400 animate-pulse" size={20} />
                    <span className="text-orange-400 font-bold text-lg">{formatTime(timeLeft)}</span>
                  </div>
                  <p className="text-gray-300 text-sm">para cierre definitivo</p>
                </div>
              </div>

              {/* Mensaje principal */}
              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/30 mb-6">
                <h4 className="text-yellow-400 font-bold text-lg mb-3 text-center">
                  💰 ¿Vas a dejar pasar $827 USD de descuento?
                </h4>
                <div className="space-y-2 text-center">
                  <p className="text-white">
                    <span className="line-through text-gray-400">Valor normal: $844 USD</span>
                  </p>
                  <p className="text-yellow-400 font-black text-2xl">
                    Solo hoy: $17 USD
                  </p>
                  <p className="text-green-400 font-bold">
                    ¡Ahorras $827 USD!
                  </p>
                </div>
              </div>

              {/* CTA principal */}
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-xl py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl border-2 border-green-400 flex items-center justify-center gap-3 mb-4"
              >
                <Zap className="animate-pulse" size={24} />
                SÍ, QUIERO MI DESCUENTO AHORA
                <Zap className="animate-pulse" size={24} />
              </motion.button>

              {/* Mensaje de cierre */}
              <div className="text-center">
                <p className="text-red-300 text-sm font-bold">
                  Si cierras esta ventana, perderás el descuento PARA SIEMPRE
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  🔒 Pago 100% seguro • Garantía de 30 días
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimedNotificationPopup;
