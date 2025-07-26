import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, Clock, DollarSign, Shield, AlertTriangle, TrendingUp } from 'lucide-react';
import { useStripe } from '../hooks/useStripe';

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
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

  const { redirectToCheckout, loading, error } = useStripe();

  const handlePurchaseClick = async () => {
    await redirectToCheckout();
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-red-900 via-black to-red-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-orange-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título principal demoledor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 mb-6">
            🚨 ÚLTIMA LLAMADA 🚨
          </h2>
          <p className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto mb-8">
            Esta es tu ÚLTIMA oportunidad de cambiar tu vida financiera para siempre
          </p>

          {/* Contador de urgencia extrema */}
          <div className="bg-gradient-to-r from-black to-red-900 rounded-3xl p-8 border-2 border-red-400 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="text-red-400 animate-pulse" size={32} />
              <span className="text-white font-black text-xl">EL ACCESO SE CIERRA EN:</span>
            </div>
            <div className="text-6xl md:text-7xl font-black text-red-400 mb-4">
              {formatTime(timeLeft)}
            </div>
            <p className="text-yellow-400 font-bold text-lg">
              ⚠️ Después de esto, NO habrá más oportunidades ⚠️
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Urgencia y beneficios */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 mb-8">
              <h3 className="text-3xl font-black text-white mb-6 text-center">
                🎯 LO QUE OBTIENES HOY 🎯
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-green-600/20 rounded-xl p-4 border border-green-500/30">
                  <DollarSign className="text-green-400" size={24} />
                  <div>
                    <p className="text-white font-bold">Sistema Matemático Completo</p>
                    <p className="text-green-300 text-sm">Valor: $25,000 USD</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                  <Shield className="text-blue-400" size={24} />
                  <div>
                    <p className="text-white font-bold">Garantía Blindada 30 Días</p>
                    <p className="text-blue-300 text-sm">+ $500 USD si no funciona</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-purple-600/20 rounded-xl p-4 border border-purple-500/30">
                  <TrendingUp className="text-purple-400" size={24} />
                  <div>
                    <p className="text-white font-bold">Soporte VIP 24/7</p>
                    <p className="text-purple-300 text-sm">Acceso directo al creador</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-yellow-600/20 rounded-xl p-4 border border-yellow-500/30">
                  <Zap className="text-yellow-400" size={24} />
                  <div>
                    <p className="text-white font-bold">Bonos Exclusivos</p>
                    <p className="text-yellow-300 text-sm">Valor adicional: $5,000 USD</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-lg line-through">Valor Total: $30,000 USD</p>
                <p className="text-4xl font-black text-green-400">Tu Precio: $2,500 USD</p>
                <p className="text-green-300 font-bold">¡Ahorras $27,500 USD!</p>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha - CTA demoledor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 border-2 border-green-400 mb-8">
              <h3 className="text-4xl font-black text-white mb-6">
                💰 ASEGURA TU CUPO 💰
              </h3>

              <p className="text-xl text-green-100 font-bold mb-8">
                Solo tienes que hacer UNA cosa para cambiar tu vida financiera para siempre:
              </p>

              <motion.button
                onClick={handlePurchaseClick}
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-2xl py-8 px-8 rounded-2xl transition-all duration-300 shadow-2xl border-2 border-green-400 mb-6"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    PROCESANDO...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Zap size={28} />
                    🚨 COMPRAR POR $17 USD 🚨
                  </div>
                )}
              </motion.button>

              <p className="text-green-200 text-lg font-bold mb-4">
                ⚡ Respuesta inmediata garantizada ⚡
              </p>

              <div className="bg-green-700/50 rounded-xl p-4">
                <p className="text-green-100 text-sm font-bold">
                  ✅ Pago 100% seguro con Stripe<br/>
                  ✅ Acceso inmediato al sistema<br/>
                  ✅ Empiezas a generar resultados HOY mismo
                </p>
              </div>
            </div>

            {/* Mensaje de urgencia final */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 border-2 border-yellow-400">
              <p className="text-white font-black text-lg mb-2">
                ⚠️ ADVERTENCIA FINAL ⚠️
              </p>
              <p className="text-red-100 font-bold">
                Si sales de esta página sin actuar, perderás esta oportunidad PARA SIEMPRE.
                No habrá segundas oportunidades, no habrá excepciones.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Estadística final demoledora */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-xl font-bold">
            📊 El 97% de las personas que llegan hasta aquí terminan asegurando su cupo
          </p>
          <p className="text-yellow-400 text-lg font-bold mt-2">
            🤔 ¿Serás parte del 97% que actúa o del 3% que se arrepiente para siempre?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;