import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  highlight,
  as = 'h2',
  className = '',
}) => {
  const Comp = as;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      <Comp className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
        {title}
        {highlight && (
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            {highlight}
          </span>
        )}
      </Comp>
    </motion.div>
  );
};

export default SectionTitle; 