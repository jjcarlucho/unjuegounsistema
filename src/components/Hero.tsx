import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Zap, TrendingUp, Shield, Clock, DollarSign, Users } from 'lucide-react';

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Gané $18,500 en mi primera semana", author: "Carlos M." },
    { text: "Increíble, $32,000 en 21 días", author: "Ana L." },
    { text: "El sistema funciona, $25,000 en un mes", author: "Roberto S." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("🔥 ¡QUIERO ACCEDER AL SISTEMA MATEMÁTICO AHORA! He visto la página y estoy listo para cambiar mi vida financiera. ¿Cuál es el siguiente paso?");
    window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
  };

  const handleVideoClick = () => {
    // Aquí puedes agregar la lógica para abrir un modal de video
    console.log("Abrir video explicativo");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-purple-500/10 animate-pulse"></div>

      {/* Efectos de luz premium */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Partículas flotantes premium */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-emerald-400/40' :
              i % 3 === 1 ? 'bg-cyan-400/40' : 'bg-purple-400/40'
            }`}
            animate={{
              y: [-20, -120],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            {/* Badge de urgencia premium */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-black text-sm mb-6 border-2 border-pink-400 shadow-2xl shadow-pink-500/25"
            >
              <Zap size={18} className="animate-pulse" />
              <span className="animate-pulse">🔥 ÚLTIMOS 7 CUPOS DISPONIBLES 🔥</span>
            </motion.div>

            {/* Título principal demoledor */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                UN JUEGO.
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                UN SISTEMA.
              </span>
            </motion.h1>

            {/* Subtítulo impactante */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-white font-bold mb-8 leading-relaxed"
            >
              El método matemático <span className="text-emerald-400 font-black">SECRETO</span> con{' '}
              <span className="text-green-400 font-black">98% de efectividad</span>
              <br />
              Usado en más de <span className="text-cyan-400 font-black">500,000 shoes</span>
              <br />
              <span className="text-purple-400 font-black">Nunca antes revelado públicamente</span>
            </motion.p>

            {/* Estadísticas impactantes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-700/20 rounded-2xl p-4 border border-green-500/30">
                <DollarSign className="text-green-400 mx-auto mb-2" size={24} />
                <p className="text-2xl font-black text-green-400">$25K+</p>
                <p className="text-green-300 text-sm font-bold">Ganancia Promedio</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-700/20 rounded-2xl p-4 border border-blue-500/30">
                <TrendingUp className="text-blue-400 mx-auto mb-2" size={24} />
                <p className="text-2xl font-black text-blue-400">98%</p>
                <p className="text-blue-300 text-sm font-bold">Precisión</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-700/20 rounded-2xl p-4 border border-purple-500/30">
                <Users className="text-purple-400 mx-auto mb-2" size={24} />
                <p className="text-2xl font-black text-purple-400">2,847</p>
                <p className="text-purple-300 text-sm font-bold">Usuarios Exitosos</p>
              </div>
            </motion.div>

            {/* Testimonial rotativo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 mb-8 border border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <motion.p
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white font-bold text-lg mb-2"
              >
                "{testimonials[currentTestimonial].text}"
              </motion.p>
              <p className="text-gray-400 font-medium">
                - {testimonials[currentTestimonial].author}
              </p>
            </motion.div>

            {/* CTAs principales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white font-black text-xl py-6 px-8 rounded-2xl transition-all duration-300 shadow-2xl border-2 border-emerald-400 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap size={24} className="relative z-10" />
                <span className="relative z-10">ACCEDER AL MÉTODO AHORA</span>
              </motion.button>

              <motion.button
                onClick={handleVideoClick}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-slate-700 via-purple-700 to-slate-800 hover:from-slate-600 hover:via-purple-600 hover:to-slate-700 text-white font-bold text-xl py-6 px-8 rounded-2xl transition-all duration-300 border-2 border-purple-500 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play size={24} className="relative z-10" />
                <span className="relative z-10">VER DEMOSTRACIÓN</span>
              </motion.button>
            </motion.div>

            {/* Garantías rápidas premium */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm"
            >
              <div className="flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
                <Shield size={16} className="text-emerald-400" />
                <span className="font-bold text-emerald-300">Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                <Clock size={16} className="text-cyan-400" />
                <span className="font-bold text-cyan-300">Acceso inmediato</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                <Star size={16} className="text-purple-400" />
                <span className="font-bold text-purple-300">Soporte 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen del libro */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Efectos de brillo alrededor del libro */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-3xl blur-3xl animate-pulse"></div>

              {/* Imagen del libro */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-yellow-400/50 shadow-2xl">
                <img
                  src="/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg"
                  alt="UN JUEGO. UN SISTEMA. - Portada del libro"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />

                {/* Badge de precio premium */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1, type: "spring" }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-black text-lg border-2 border-pink-400 shadow-2xl shadow-pink-500/50 transform rotate-12"
                >
                  <div className="text-center">
                    <p className="text-xs line-through opacity-75">$25,000</p>
                    <p className="text-2xl animate-pulse">$2,500</p>
                    <p className="text-xs font-bold text-pink-200">90% OFF</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
