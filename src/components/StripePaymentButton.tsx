import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { redirectToCheckout } from '../lib/stripe';

interface StripePaymentButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'sticky';
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StripePaymentButton: React.FC<StripePaymentButtonProps> = ({
  className = '',
  children,
  variant = 'primary',
  showIcon = true,
  size = 'md'
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Mostrar indicador de carga
      const loadingToast = document.createElement('div');
      loadingToast.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      loadingToast.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Preparando tu pago seguro...</span>
        </div>
      `;
      document.body.appendChild(loadingToast);

      // Redirigir a Stripe
      await redirectToCheckout();

      // Remover toast de carga
      document.body.removeChild(loadingToast);

    } catch (error) {
      console.error('Error en el pago:', error);
      setError('Error al procesar el pago. Por favor, intenta de nuevo.');
      
      // Mostrar error toast
      const errorToast = document.createElement('div');
      errorToast.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      errorToast.innerHTML = `
        <div class="flex items-center gap-2">
          <span>❌ Error al procesar el pago</span>
        </div>
      `;
      document.body.appendChild(errorToast);
      
      setTimeout(() => {
        if (document.body.contains(errorToast)) {
          document.body.removeChild(errorToast);
        }
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const variantClasses = {
      primary: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-400',
      secondary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 focus:ring-blue-400',
      sticky: 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white shadow-lg shadow-red-500/25 focus:ring-red-400'
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  };

  return (
    <motion.button
      onClick={handlePayment}
      disabled={isLoading}
      className={getButtonClasses()}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center gap-2">
        {showIcon && (
          <div className="flex items-center gap-1">
            <CreditCard className="w-4 h-4" />
            <Shield className="w-4 h-4" />
          </div>
        )}
        
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Procesando...</span>
          </>
        ) : (
          <>
            {showIcon && <Zap className="w-4 h-4" />}
            <span>{children || 'PAGAR AHORA $47'}</span>
            {showIcon && <CheckCircle className="w-4 h-4" />}
          </>
        )}
      </div>

      {/* Badge de seguridad */}
      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
        🔒 SSL
      </div>
    </motion.button>
  );
};

export default StripePaymentButton;
