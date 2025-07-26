import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, CreditCard, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const CancelPage: React.FC = () => {
  const handleRetryPayment = () => {
    // Redirect to checkout again
    window.location.href = '/#comprar';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <XCircle className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Pago Cancelado
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          No te preocupes, tu pago fue cancelado y no se realizó ningún cargo a tu tarjeta.
        </p>

        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            ¡No pierdas esta oportunidad!
          </h3>
          <p className="text-blue-200 mb-4">
            El Sistema Matemático Premium está disponible por tiempo limitado a solo <strong>$17 USD</strong>.
          </p>
          <ul className="text-left text-blue-200 space-y-2 mb-6">
            <li>✅ Acceso completo al sistema</li>
            <li>✅ Métodos probados y efectivos</li>
            <li>✅ Resultados garantizados</li>
            <li>✅ Soporte premium incluido</li>
          </ul>
        </div>

        <div className="space-y-4 mb-8">
          <motion.button
            onClick={handleRetryPayment}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <CreditCard className="w-5 h-5" />
            Intentar Pago Nuevamente
          </motion.button>

          <Link 
            to="/"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>
        </div>

        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-200 text-sm">
            <strong>Recordatorio:</strong> Esta oferta especial de $17 USD es por tiempo limitado. 
            ¡No dejes pasar esta oportunidad única!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CancelPage;
