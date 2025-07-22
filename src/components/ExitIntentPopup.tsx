import React, { useState, useEffect } from 'react';
import { X, Clock, Zap, Shield, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { redirectToCheckout } from '../lib/stripe';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos

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

  const handleStripeClick = async () => {
    try {
      await redirectToCheckout();
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
      alert('Error procesando el pago. Por favor, intenta de nuevo.');
    }
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

              {/* Oferta brutal */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-6 border-2 border-green-400">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-green-200 text-sm">Precio Normal</p>
                      <p className="text-2xl font-bold text-white line-through">$25,000</p>
                    </div>
                    <Zap className="text-yellow-400" size={32} />
                    <div className="text-center">
                      <p className="text-green-200 text-sm">Tu Precio AHORA</p>
                      <p className="text-4xl font-black text-yellow-400">$2,500</p>
                    </div>
                  </div>
                  <p className="text-green-100 font-bold">
                    ¡Ahorras $22,500 USD! 💰
                  </p>
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
                  onClick={handleStripeClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-xl py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-400 mb-4"
                >
                  💳 PAGAR CON TARJETA - $17
                </button>
                <p className="text-yellow-400 text-sm font-bold">
                  ⚡ Pago seguro con Stripe ⚡
                </p>
                <p className="text-red-400 text-xs mt-2 font-bold animate-pulse">
                  ⚠️ Oferta por tiempo limitado ⚠️
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
