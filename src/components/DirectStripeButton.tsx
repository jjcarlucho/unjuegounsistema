import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap } from 'lucide-react';
import { redirectToCheckout } from '../lib/stripe';
import { useMetaPixel } from '../hooks/useMetaPixel';

interface DirectStripeButtonProps {
  className?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success';
}

const DirectStripeButton: React.FC<DirectStripeButtonProps> = ({
  className = '',
  children,
  size = 'lg',
  variant = 'primary'
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { trackInitiateCheckout, trackButtonClick } = useMetaPixel();

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      // Rastrear eventos del Meta Pixel
      trackInitiateCheckout(17.00, 'USD');
      trackButtonClick('direct_stripe_button');

      // Verificar que Stripe esté configurado
      if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
        throw new Error('Stripe no está configurado correctamente');
      }

      await redirectToCheckout();
    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error procesando el pago';
      setIsLoading(false);

      // Mostrar alerta al usuario
      alert(`Error: ${errorMessage}\n\nPor favor, intenta de nuevo o contacta soporte.`);
    }
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-lg',
    lg: 'py-4 px-8 text-xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 border-emerald-400',
    secondary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-blue-400',
    success: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 border-yellow-400 text-black'
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
        ${variant === 'success' ? 'text-black' : 'text-white'}
        ${className}
      `}
    >
      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Contenido del botón */}
      <div className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
            <span>Procesando...</span>
          </>
        ) : (
          <>
            <CreditCard size={20} />
            {children}
            <Zap size={20} />
          </>
        )}
      </div>
    </motion.button>
  );
};

export default DirectStripeButton;
