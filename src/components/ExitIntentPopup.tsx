import React, { useState, useEffect } from 'react';
import { X, Clock, Zap, Shield, Star, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStripe } from '../hooks/useStripe';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos
  const { redirectToCheckout, loading, error } = useStripe();

  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePurchaseClick = () => {
    redirectToCheckout();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-2xl w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 border-4 border-emerald-400 shadow-2xl overflow-hidden"
          >
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-purple-500/10 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 animate-pulse"></div>
            
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="relative z-10 text-center">
              {/* Título impactante */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2 tracking-tight">
                  ¡ESPERA!
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                  🔥 ÚLTIMA OPORTUNIDAD 🔥
                </p>
                <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-black px-6 py-3 rounded-full inline-block font-black text-xl">
                  90% DE DESCUENTO EXCLUSIVO
                </div>
              </motion.div>

              {/* Contador urgente */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="bg-black/50 rounded-2xl p-6 mb-6 border-2 border-red-500"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="text-red-400" size={24} />
                  <span className="text-white font-bold">Esta oferta expira en:</span>
                </div>
                <div className="text-5xl font-black text-red-400 mb-2">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-yellow-400 font-bold">¡No volverás a ver este precio!</p>
              </motion.div>

              {/* Oferta especial */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-6 border-2 border-green-400">
                  <div className="text-center">
                    <p className="text-green-200 text-lg font-bold mb-2">🔥 OFERTA ESPECIAL DE SALIDA 🔥</p>
                    <p className="text-6xl font-black text-yellow-400 mb-2">$17</p>
                    <p className="text-green-100 font-bold text-xl">
                      ¡Tu última oportunidad de cambiar tu vida! 💰
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Garantías rápidas */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-4 mb-6"
              >
                <div className="text-center">
                  <Shield className="text-green-400 mx-auto mb-2" size={24} />
                  <p className="text-xs text-white font-bold">Garantía Total</p>
                </div>
                <div className="text-center">
                  <Star className="text-yellow-400 mx-auto mb-2" size={24} />
                  <p className="text-xs text-white font-bold">98% Precisión</p>
                </div>
                <div className="text-center">
                  <Zap className="text-blue-400 mx-auto mb-2" size={24} />
                  <p className="text-xs text-white font-bold">Acceso Inmediato</p>
                </div>
              </motion.div>

              {/* CTA demoledor */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <button
                  onClick={handlePurchaseClick}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-xl py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-400 mb-4"
                >
                  {loading ? (
                    <>
                      <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      PROCESANDO...
                    </>
                  ) : (
                    <>
                      <CreditCard className="inline mr-2" size={20} />
                      🚨 ¡ESPERA! DAME MI OPORTUNIDAD DE $17 🚨
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-red-400 text-sm mb-2">{error}</p>
                )}
                <p className="text-yellow-400 text-sm font-bold">
                  🔒 Pago 100% seguro con Stripe
                </p>
                <p className="text-red-400 text-xs mt-2 font-bold animate-pulse">
                  ⚠️ Solo para los primeros 10 que respondan ⚠️
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
