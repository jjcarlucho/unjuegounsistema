import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, X, CreditCard } from 'lucide-react';
import { useStripe } from '../hooks/useStripe';
import { useCTATracking } from '../hooks/useAnalytics';

const UltraStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora
  const { redirectToCheckout, loading, error } = useStripe();
  const { trackCTAClick } = useCTATracking();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.3; // Aparece después del 70% de scroll
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

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePurchaseClick = () => {
    trackCTAClick('sticky_bottom', 'COMPRAR POR $17');
    redirectToCheckout();
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
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-black border-t-2 border-emerald-400 shadow-2xl"
        >
          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-1"
          >
            <X size={16} />
          </button>

          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Contador de tiempo */}
              <div className="flex items-center gap-3">
                <Clock className="text-red-400" size={20} />
                <div className="text-center">
                  <p className="text-red-400 font-black text-lg">{formatTime(timeLeft)}</p>
                  <p className="text-gray-300 text-xs">para cierre definitivo</p>
                </div>
              </div>

              {/* Precio */}
              <div className="text-center">
                <div className="bg-red-600 rounded-lg px-4 py-2">
                  <p className="text-white font-black text-2xl">$17</p>
                  <p className="text-red-200 text-xs font-bold">PRECIO ESPECIAL</p>
                </div>
              </div>

              {/* CTA principal */}
              <button
                onClick={handlePurchaseClick}
                disabled={loading}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-lg py-3 px-6 rounded-xl transition-all duration-300 shadow-xl border border-emerald-400 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    PROCESANDO...
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    💎 COMPRAR POR $17 💎
                  </>
                )}
              </button>
            </div>

            {/* Mensaje de urgencia */}
            <div className="text-center mt-2">
              <p className="text-red-400 text-sm font-bold">
                ⚠️ Solo 7 cupos restantes - Una vez agotados, se cierra PARA SIEMPRE
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltraStickyCTA;
