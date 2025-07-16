import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz0Mv4JlI4bHjIkPgqOOYPqHALiJxkdGkjP71yH6uxrLQf3HvaYmSrfR4EfCeZswdRPmw/exec';

const FinalCTA = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!nombre.trim() || !apellido.trim()) {
      setError('Por favor, completa tu nombre y apellido.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Ingresa un email válido.');
      return;
    }
    setSubmitted(true);
    try {
      await emailjs.send(
        'service_ftj2umo',
        'template_ord7fi7',
        { nombre, apellido, email },
        'urW_9W9UQMNBK8-Sz'
      );
      setNombre('');
      setApellido('');
      setEmail('');
    } catch (err: any) {
      setError('Error al enviar el email: ' + (err?.text || err?.message || JSON.stringify(err)));
      setSubmitted(false);
      return;
    }
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="final-cta" className="py-24 flex justify-center items-center bg-transparent">
      <div className="premium-glass max-w-xl w-full mx-auto p-12 rounded-2xl border border-yellow-500/10 shadow-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-yellow-400 mb-6">
          ¡Asegura tu lugar antes que nadie!
        </h2>
        <p className="text-lg text-yellow-400 mb-8 font-semibold">
          Solo los primeros tendrán acceso anticipado y bonos exclusivos. ¡No te quedes fuera!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Tu nombre real (confidencial)"
            className="w-full px-6 py-4 rounded-xl bg-black/40 border border-yellow-500/20 text-white placeholder:text-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-lg font-light transition"
            disabled={submitted}
            required
          />
          <input
            type="text"
            value={apellido}
            onChange={e => setApellido(e.target.value)}
            placeholder="Tu apellido (no se comparte)"
            className="w-full px-6 py-4 rounded-xl bg-black/40 border border-yellow-500/20 text-white placeholder:text-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-lg font-light transition"
            disabled={submitted}
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email para acceso anticipado"
            className="w-full px-6 py-4 rounded-xl bg-black/40 border border-yellow-500/20 text-white placeholder:text-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-lg font-light transition"
            disabled={submitted}
            required
          />
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 16px #D4AF37cc' }}
            type="submit"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500/80 to-yellow-400/80 text-black font-bold text-lg shadow-lg border border-yellow-500/30 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitted}
          >
            {submitted ? '¡Acceso reservado!' : 'Quiero mi acceso exclusivo'}
          </motion.button>
        </form>
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-red-400 mt-4"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {submitted && !error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="flex flex-col items-center mt-8"
            >
              <CheckCircle2 className="w-16 h-16 text-yellow-400 mb-2 animate-bounce" />
              <span className="text-yellow-200 text-lg font-semibold">¡Listo! Revisa tu correo para instrucciones secretas y tu acceso prioritario.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalCTA;