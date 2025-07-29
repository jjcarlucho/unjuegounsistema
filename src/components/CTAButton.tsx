import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  showArrow?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  showArrow = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-sans font-bold tracking-wide
        py-4 px-8 rounded-lg
        transition-all duration-200 ease-in-out
        hover:scale-105 hover:shadow-lg
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-quantum-green-cta focus:ring-offset-2 focus:ring-offset-quantum-dark
        ${className}
      `}
    >
      <div className="flex items-center justify-center gap-2">
        {children}
        {showArrow && <ArrowRight className="w-5 h-5" />}
      </div>
    </button>
  );
};

export default CTAButton; 