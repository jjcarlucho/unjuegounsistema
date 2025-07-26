import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, AlertTriangle, CreditCard } from 'lucide-react';
import { useStripe } from '../hooks/useStripe';

const UltraFinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora
  const [submitted, setSubmitted] = useState(false);
  const { redirectToCheckout, loading, error } = useStripe();

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
    redirectToCheckout();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-red-900/20 relative">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-6">
            🚨 ÚLTIMA LLAMADA
          </h2>
          <p className="text-2xl text-white font-bold max-w-3xl mx-auto">
            Esta es tu ÚLTIMA oportunidad de cambiar tu vida financiera para siempre
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Urgencia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contador de urgencia */}
            <div className="bg-black/50 rounded-2xl p-8 border-2 border-red-500 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="text-red-400" size={32} />
                <span className="text-white font-black text-xl">EL ACCESO SE CIERRA EN:</span>
              </div>
              <div className="text-5xl font-black text-red-400 text-center mb-4">
                {formatTime(timeLeft)}
              </div>
              <p className="text-red-300 font-bold text-center">
                ⚠️ Después de esto, NO habrá más oportunidades
              </p>
            </div>

            {/* Lo que obtienes */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-2xl font-black text-white mb-6 text-center">
                🎯 LO QUE OBTIENES HOY
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-emerald-600/20 rounded-xl p-4">
                  <DollarSign className="text-emerald-400" size={24} />
                  <div>
                    <p className="text-white font-bold">Sistema Matemático Completo</p>
                    <p className="text-emerald-300 text-sm">Sistema completo incluido</p>
                  </div>
                </div>
                

                
                <div className="flex items-center gap-4 bg-purple-600/20 rounded-xl p-4">
                  <Zap className="text-purple-400" size={24} />
                  <div>
                    <p className="text-white font-bold">Soporte VIP 24/7</p>
                    <p className="text-purple-300 text-sm">Acceso directo al creador</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center bg-green-600/20 rounded-xl p-4">
                <p className="text-3xl font-black text-green-400">Tu Precio: $17 USD</p>
                <p className="text-green-300 font-bold">¡Acceso completo al sistema!</p>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-emerald-800/50 to-green-900/50 rounded-3xl p-8 border-2 border-emerald-500">
              <h3 className="text-3xl font-black text-white mb-6">
                💰 ASEGURA TU CUPO
              </h3>
              
              <p className="text-xl text-emerald-100 font-bold mb-8">
                🎯 ESTA ES TU ÚLTIMA OPORTUNIDAD DE ESCAPAR DE LA POBREZA:
              </p>
              <p className="text-lg text-emerald-200 font-bold mb-6">
                ⚡ Solo $17 te separan de una vida de abundancia financiera ⚡
              </p>
              
              <button
                onClick={handlePurchaseClick}
                disabled={submitted || loading}
                className={`w-full text-white font-black text-2xl py-8 px-8 rounded-2xl transition-all duration-300 shadow-2xl border-2 mb-6 ${
                  submitted 
                    ? 'bg-green-600 border-green-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 border-emerald-400 hover:scale-105'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    PROCESANDO...
                  </div>
                ) : submitted ? (
                  <div className="flex items-center justify-center gap-3">
                    <Zap size={28} />
                    ✅ REDIRIGIENDO A PAGO
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <CreditCard size={28} />
                    � ¡SÍ! QUIERO SER RICO POR SOLO $17 �
                  </div>
                )}
              </button>

              {error && (
                <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
              )}



              <div className="bg-emerald-700/30 rounded-xl p-4">
                <p className="text-emerald-100 text-sm font-bold">
                  ✅ Pago 100% seguro con Stripe<br/>
                  ✅ Acceso INMEDIATO después del pago<br/>
                  ✅ Empiezas a generar $$$$ HOY mismo<br/>
                  ✅ Soporte técnico incluido
                </p>
              </div>
            </div>

            {/* Mensaje de urgencia final */}
            <div className="bg-red-600/20 rounded-2xl p-6 border border-red-500 mt-8">
              <p className="text-white font-black text-lg mb-2">
                ⚠️ ADVERTENCIA FINAL
              </p>
              <p className="text-red-100 font-bold">
                Si sales de esta página sin actuar, perderás esta oportunidad PARA SIEMPRE.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Estadística final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-xl font-bold">
            📊 El 97% de las personas que llegan hasta aquí terminan asegurando su cupo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFinalCTA;
