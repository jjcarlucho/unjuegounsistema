import React from 'react';
import { Lock, Eye, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Storytelling = () => {
  return (
    <section className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-8">
            <Lock className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">EL SECRETO MEJOR GUARDADO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            El Sistema de Baccarat de la Élite:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Un Secreto de $10,000 USD
            </span>
          </h2>
        </div>
        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="premium-glass flex items-start gap-4 p-8 rounded-2xl border border-yellow-500/10 shadow-xl"
          >
            <Eye className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <span>
              Hace más de 25 años, este sistema fue desarrollado en secreto por un genio matemático para un círculo exclusivo de la élite financiera. Pagaron más de $10,000 USD por este conocimiento, diseñado para explotar las vulnerabilidades estadísticas del Baccarat y asegurar una ventaja inquebrantable.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="premium-glass flex items-start gap-4 p-8 rounded-2xl border border-yellow-500/10 shadow-xl"
          >
            <Crown className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <span>
              Durante décadas, este método ha sido su arma secreta, garantizando resultados consistentes lejos de la mirada pública. Ahora, por primera vez, este conocimiento invaluable está a tu alcance, democratizando una ventaja que antes solo estaba reservada para unos pocos privilegiados.
            </span>
          </motion.div>
          <div className="premium-glass bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-yellow-500/20 mt-12">
            <p className="text-2xl font-light text-yellow-400 mb-4 italic">
              "Esto no es un simple ebook. Es la llave a un conocimiento que antes costaba una fortuna y estaba reservado para la élite."
            </p>
            <p className="text-yellow-400 font-bold">
              Esta es tu única oportunidad de poseer el sistema que redefinió el Baccarat para los que realmente ganan.
            </p>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;