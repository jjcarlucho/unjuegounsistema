import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

// Props para <button>
interface ButtonAsButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>, ButtonBaseProps {
  as?: 'button';
}
// Props para <a>
interface ButtonAsAnchorProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>, ButtonBaseProps {
  as: 'a';
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const baseStyles = {
  primary:
    'group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400',
  secondary:
    'group inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400',
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { as = 'button', children, variant = 'primary', className = '', ...rest } = props as ButtonProps;
  const classes = `${baseStyles[variant]} ${className}`;
  if (as === 'a') {
    const { href, ...anchorProps } = rest as ButtonAsAnchorProps;
    return (
      <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.05 }}>
        <a className={classes} href={href} {...anchorProps}>
          {children}
        </a>
      </motion.div>
    );
  }
  return (
    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.05 }}>
      <button className={classes} {...(rest as ButtonAsButtonProps)}>
        {children}
      </button>
    </motion.div>
  );
};

export default Button; 