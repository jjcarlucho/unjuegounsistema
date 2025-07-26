import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alejandro G.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Nunca vi un método tan preciso. Mi rentabilidad se disparó y mi mentalidad cambió para siempre. Es realmente exclusivo.',
  },
  {
    name: 'Lucía P.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'El sistema es simple, elegante y brutalmente efectivo. No es para cualquiera, pero si eres disciplinado, es oro puro.',
  },
  {
    name: 'Kevin T.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'He pagado miles por cursos y nunca vi algo tan matemático y real. Esto es lo que usan los grandes.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => (
  <section className="py-28 bg-transparent relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Testimonios <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">reales</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Personas que ya aplicaron el método y cambiaron su juego para siempre.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px #D4AF37aa' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="premium-glass flex flex-col items-center text-center p-8 rounded-2xl border border-yellow-500/10 shadow-xl cursor-pointer group"
          >
            <img src={t.avatar} alt={t.name} loading="lazy" className="w-20 h-20 rounded-full border-4 border-yellow-400 mb-4 object-cover shadow-lg" />
            <p className="text-lg text-gray-200 italic mb-4">“{t.quote}”</p>
            <div className="text-yellow-400 font-bold text-lg">{t.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;