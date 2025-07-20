import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import StripePaymentButton, { PaymentSecurityBadges } from '../components/StripePaymentButton';

const TestPayment: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaymentStart = () => {
    setPaymentStatus('processing');
    setErrorMessage('');
  };

  const handlePaymentError = (error: string) => {
    setPaymentStatus('error');
    setErrorMessage(error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-black text-white mb-4">
            🧪 PÁGINA DE PRUEBA - STRIPE
          </h1>
          <p className="text-xl text-gray-300">
            Prueba el sistema de pagos antes de ir a producción
          </p>
        </motion.div>

        {/* Status Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              📊 Estado del Sistema
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Stripe Configurado:</span>
                <span className={`font-bold ${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ? 'text-green-400' : 'text-red-400'}`}>
                  {import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ? '✅ SÍ' : '❌ NO'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Modo:</span>
                <span className="font-bold text-yellow-400">
                  {import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY?.includes('test') ? '🧪 TEST' : '🚀 LIVE'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Estado del Pago:</span>
                <span className={`font-bold flex items-center gap-2 ${
                  paymentStatus === 'idle' ? 'text-gray-400' :
                  paymentStatus === 'processing' ? 'text-blue-400' :
                  paymentStatus === 'success' ? 'text-green-400' :
                  'text-red-400'
                }`}>
                  {paymentStatus === 'idle' && '⏳ Esperando'}
                  {paymentStatus === 'processing' && <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div> Procesando</>}
                  {paymentStatus === 'success' && <><CheckCircle size={16} /> Exitoso</>}
                  {paymentStatus === 'error' && <><AlertCircle size={16} /> Error</>}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        {paymentStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 bg-red-600/20 border border-red-500/50 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="text-red-400" size={20} />
              <span className="text-red-400 font-bold">Error en el Pago</span>
            </div>
            <p className="text-red-300 text-sm">{errorMessage}</p>
          </motion.div>
        )}

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl p-6 border border-emerald-500/30 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            📦 PRODUCTO DE PRUEBA
          </h3>
          
          <div className="text-center mb-6">
            <p className="text-emerald-300 text-lg mb-2">UN JUEGO. UN SISTEMA.</p>
            <p className="text-gray-300 mb-4">Sistema matemático completo + bonos</p>
            
            <div className="bg-black/30 rounded-lg p-4 inline-block">
              <p className="text-gray-400 line-through">Valor: $844 USD</p>
              <p className="text-3xl font-black text-emerald-400">Precio: $17 USD</p>
              <p className="text-emerald-300 font-bold">98% OFF</p>
            </div>
          </div>
          
          {/* Payment Button */}
          <StripePaymentButton 
            className="w-full"
            size="lg"
            onPaymentStart={handlePaymentStart}
            onPaymentError={handlePaymentError}
          />
          
          <PaymentSecurityBadges />
        </motion.div>

        {/* Test Cards Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            💳 TARJETAS DE PRUEBA
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-blue-300 font-bold mb-2">✅ Pago Exitoso:</p>
              <p className="text-gray-300 font-mono">4242 4242 4242 4242</p>
            </div>
            
            <div>
              <p className="text-red-300 font-bold mb-2">❌ Pago Rechazado:</p>
              <p className="text-gray-300 font-mono">4000 0000 0000 0002</p>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-yellow-300 font-bold mb-2">📝 Datos adicionales:</p>
              <p className="text-gray-300">
                <strong>Fecha:</strong> Cualquier fecha futura<br/>
                <strong>CVC:</strong> Cualquier 3 dígitos<br/>
                <strong>ZIP:</strong> Cualquier código postal
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <a
            href="/"
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            ← Volver a la página principal
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TestPayment;
