import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, RefreshCw, ArrowLeft, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ErrorPage: React.FC = () => {
  const handleRetryPayment = () => {
    // Redirect to checkout again
    window.location.href = '/#comprar';
  };

  const handleContactSupport = () => {
    // Open email client
    window.location.href = 'mailto:soporte@sistemamatematico.com?subject=Error en el pago&body=Hola, tuve un problema al procesar mi pago. Por favor ayúdenme.';
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
          className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <AlertTriangle className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Error en el Pago
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Ocurrió un problema técnico al procesar tu pago. No te preocupes, no se realizó ningún cargo.
        </p>

        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Posibles causas:</h3>
          <ul className="text-left text-red-200 space-y-2">
            <li>• Problema temporal con el procesador de pagos</li>
            <li>• Conexión a internet inestable</li>
            <li>• Información de tarjeta incorrecta</li>
            <li>• Límites de la tarjeta de crédito</li>
          </ul>
        </div>

        <div className="space-y-4 mb-8">
          <motion.button
            onClick={handleRetryPayment}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <RefreshCw className="w-5 h-5" />
            Intentar Nuevamente
          </motion.button>

          <motion.button
            onClick={handleContactSupport}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Mail className="w-5 h-5" />
            Contactar Soporte
          </motion.button>

          <Link 
            to="/"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>
        </div>

        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
          <p className="text-blue-200 text-sm">
            <strong>Soporte 24/7:</strong> Si el problema persiste, nuestro equipo de soporte está disponible 
            para ayudarte. Responderemos en menos de 2 horas.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
