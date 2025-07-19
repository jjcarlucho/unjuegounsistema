import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Zap, Shield } from 'lucide-react';
import { redirectToCheckout } from '../lib/stripe';

interface StripePaymentButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  customerEmail?: string;
  onPaymentStart?: () => void;
  onPaymentError?: (error: string) => void;
}

const StripePaymentButton: React.FC<StripePaymentButtonProps> = ({
  className = '',
  size = 'lg',
  variant = 'primary',
  customerEmail,
  onPaymentStart,
  onPaymentError
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      onPaymentStart?.();

      await redirectToCheckout(customerEmail);
    } catch (error) {
      console.error('Payment error:', error);
      onPaymentError?.(error instanceof Error ? error.message : 'Error procesando el pago');
      setIsLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'py-3 px-6 text-lg',
    md: 'py-4 px-8 text-xl',
    lg: 'py-6 px-12 text-2xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 border-emerald-400',
    secondary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-blue-400'
  };

  return (
    <motion.button
      onClick={handlePayment}
      disabled={isLoading}
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        text-white font-black rounded-2xl transition-all duration-300 
        shadow-xl border-2 flex items-center justify-center gap-3 
        relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Contenido del botón */}
      <div className="relative z-10 flex items-center gap-3">
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            <span>Procesando...</span>
          </>
        ) : (
          <>
            <CreditCard size={24} className="animate-pulse" />
            <span>PAGAR CON TARJETA</span>
            <Zap size={24} className="animate-pulse" />
          </>
        )}
      </div>
    </motion.button>
  );
};

// Componente de información de seguridad
export const PaymentSecurityBadges: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {/* Badges de seguridad */}
      <div className="flex items-center gap-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Lock size={16} className="text-green-400" />
          <span>Pago 100% Seguro</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-blue-400" />
          <span>SSL Encriptado</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard size={16} className="text-purple-400" />
          <span>Stripe Certified</span>
        </div>
      </div>

      {/* Métodos de pago aceptados */}
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-2">Métodos de pago aceptados:</p>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">VISA</div>
          <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">MASTERCARD</div>
          <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">AMEX</div>
          <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">DISCOVER</div>
        </div>
      </div>

      {/* Garantía */}
      <div className="bg-green-600/20 rounded-xl p-4 border border-green-500/30 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield className="text-green-400" size={20} />
          <span className="text-green-400 font-bold">GARANTÍA DE 30 DÍAS</span>
        </div>
        <p className="text-green-300 text-sm">
          Si no estás satisfecho, te devolvemos tu dinero completo
        </p>
      </div>
    </div>
  );
};

export default StripePaymentButton;
