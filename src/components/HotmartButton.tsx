import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ExternalLink } from 'lucide-react';
import HotmartModal from './HotmartModal';

interface HotmartButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

const HotmartButton: React.FC<HotmartButtonProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'primary',
  children 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-emerald-600 to-green-700 text-white hover:from-emerald-700 hover:to-green-800',
    secondary: 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800'
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePaymentSuccess = () => {
    // Aquí puedes agregar analytics o redirección
    console.log('Pago exitoso completado');
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        className={`
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
          font-bold rounded-xl transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center gap-2
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Zap size={20} />
        {children || 'ACCEDER A LA PREVENTA HOY ⚡️'}
      </motion.button>

      <HotmartModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSuccess={handlePaymentSuccess}
      />
    </>
  );
};

export default HotmartButton; 