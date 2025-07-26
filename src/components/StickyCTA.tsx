import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyCTA = () => (
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 300, delay: 0.5 }}
    className="fixed bottom-4 left-0 w-full flex justify-center z-50 md:hidden"
  >
    <button
      className="premium-glass flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-yellow-200 shadow-xl border border-yellow-500/20 backdrop-blur hover:scale-105 transition-all bg-gradient-to-r from-yellow-500/30 to-yellow-400/20"
      onClick={() => {
        const el = document.getElementById('final-cta');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
    >
      ¡Reserva tu acceso ahora!
      <ChevronRight className="w-5 h-5 ml-1" />
    </button>
  </motion.div>
);

export default StickyCTA; 