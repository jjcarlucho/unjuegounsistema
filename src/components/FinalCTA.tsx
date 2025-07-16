import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, Clock, DollarSign, Shield, AlertTriangle, TrendingUp } from 'lucide-react';
import emailjs from '@emailjs/browser';

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hora
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("🚨 ¡ESTA ES MI ÚLTIMA OPORTUNIDAD! He llegado hasta el final de la página y estoy 100% convencido. Quiero acceder al sistema matemático AHORA antes de que se acabe el tiempo. ¿Cuál es el proceso exacto para asegurar mi cupo?");
    window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="py-24 flex justify-center items-center bg-transparent">
      <div className="premium-glass max-w-xl w-full mx-auto p-12 rounded-2xl border border-yellow-500/10 shadow-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-yellow-400 mb-6">
          ¡Asegura tu lugar antes que nadie!
        </h2>
        <div className="mb-6">
          <div className="text-2xl font-bold text-white mb-2">
            <span className="line-through text-gray-400">$47</span> →
            <span className="text-yellow-400 ml-2">$17 USD</span>
          </div>
          <p className="text-sm text-gray-300">Precio de preventa por tiempo limitado</p>
        </div>
        <p className="text-lg text-yellow-400 mb-8 font-semibold">
          Solo los primeros tendrán acceso anticipado y bonos exclusivos valorados en $797. ¡No te quedes fuera!
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