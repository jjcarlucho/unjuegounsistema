import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alejandro G.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'En mi primera semana gané $1,500. El método es matemático y funciona. No es magia, es disciplina y sistema.',
    amount: '$1,500',
  },
  {
    name: 'Lucía P.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Llevo 3 semanas aplicándolo y ya recuperé mi inversión. $2,360 en ganancias. El sistema realmente funciona.',
    amount: '$2,360',
  },
  {
    name: 'Kevin T.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'Empecé con $100 como dice el método. En 2 semanas tenía $890. Es consistente y predecible.',
    amount: '$890',
  },
  {
    name: 'María S.',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    quote: 'Al principio era escéptica, pero los números no mienten. $1,200 en mi segundo mes aplicando el sistema.',
    amount: '$1,200',
  },
  {
    name: 'Carlos R.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'Lo mejor es la tranquilidad mental. Sé exactamente qué hacer cada día. $780 en mi primera quincena.',
    amount: '$780',
  },
  {
    name: 'Ana M.',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    quote: 'Trabajo solo 2 horas al día con el método. $1,850 el mes pasado. Tiempo y dinero, perfecto.',
    amount: '$1,850',
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
            <div className="text-green-400 font-bold text-xl mt-2">{t.amount}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;