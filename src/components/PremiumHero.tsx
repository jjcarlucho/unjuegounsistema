import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Zap, TrendingUp, Shield, Clock, DollarSign, Users, Crown, Sparkles, Target, Award } from 'lucide-react';

const PremiumHero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const testimonials = [
    { text: "Generé $47,300 en 3 semanas", author: "Carlos M.", location: "México", verified: true },
    { text: "$89,500 en mi primer mes completo", author: "Ana L.", location: "Colombia", verified: true },
    { text: "Increíble: $156,000 en 2 meses", author: "Roberto S.", location: "España", verified: true }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("🔥 ¡QUIERO ACCEDER AL SISTEMA MATEMÁTICO AHORA! He visto la página completa y estoy 100% convencido. ¿Cuál es el proceso exacto para asegurar mi cupo y empezar a generar resultados inmediatos?");
    window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
  };

  const handleVideoClick = () => {
    // Scroll suave a la sección de testimonios o abrir modal
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo premium con gradientes dinámicos */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black"></div>
      
      {/* Efectos de luz que siguen el mouse */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{ left: '10%', top: '20%' }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{ right: '10%', bottom: '20%' }}
      />

      {/* Partículas premium flotantes */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 4 === 0 ? 'bg-emerald-400/60' : 
              i % 4 === 1 ? 'bg-cyan-400/60' : 
              i % 4 === 2 ? 'bg-purple-400/60' : 'bg-pink-400/60'
            }`}
            animate={{
              y: [-30, -150],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 1, 0],
              scale: [0.3, 1.2, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.1,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge de urgencia premium */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-black text-sm mb-8 border-2 border-pink-400 shadow-2xl shadow-pink-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
              <Crown size={20} className="animate-bounce text-yellow-300" />
              <span className="relative z-10 animate-pulse">🔥 ACCESO EXCLUSIVO - SOLO 7 CUPOS 🔥</span>
              <Sparkles size={20} className="animate-spin text-yellow-300" />
            </motion.div>

            {/* Título principal demoledor */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight"
            >
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                UN JUEGO.
              </motion.span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                style={{ backgroundSize: '200% 200%' }}
              >
                UN SISTEMA.
              </motion.span>
            </motion.h1>

            {/* Subtítulo impactante */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-10"
            >
              <p className="text-3xl md:text-4xl text-white font-bold mb-6 leading-relaxed">
                El método matemático <span className="text-emerald-400 font-black animate-pulse">SECRETO</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xl font-bold">
                <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl p-4 border border-emerald-500/30">
                  <span className="text-emerald-400 font-black">98%</span>
                  <p className="text-emerald-300 text-sm">de efectividad</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 border border-cyan-500/30">
                  <span className="text-cyan-400 font-black">500K+</span>
                  <p className="text-cyan-300 text-sm">aplicaciones</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-4 border border-purple-500/30">
                  <span className="text-purple-400 font-black">SECRETO</span>
                  <p className="text-purple-300 text-sm">nunca revelado</p>
                </div>
              </div>
            </motion.div>

            {/* Estadísticas impactantes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            >
              <div className="bg-gradient-to-br from-emerald-600/30 to-green-700/30 rounded-2xl p-6 border border-emerald-500/40 text-center group hover:scale-105 transition-transform duration-300">
                <DollarSign className="text-emerald-400 mx-auto mb-3 group-hover:animate-bounce" size={32} />
                <p className="text-3xl font-black text-emerald-400">$89K+</p>
                <p className="text-emerald-300 text-sm font-bold">Ganancia Promedio</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-700/30 rounded-2xl p-6 border border-cyan-500/40 text-center group hover:scale-105 transition-transform duration-300">
                <Target className="text-cyan-400 mx-auto mb-3 group-hover:animate-spin" size={32} />
                <p className="text-3xl font-black text-cyan-400">98.7%</p>
                <p className="text-cyan-300 text-sm font-bold">Precisión Real</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-700/30 rounded-2xl p-6 border border-purple-500/40 text-center group hover:scale-105 transition-transform duration-300">
                <Users className="text-purple-400 mx-auto mb-3 group-hover:animate-pulse" size={32} />
                <p className="text-3xl font-black text-purple-400">4,847</p>
                <p className="text-purple-300 text-sm font-bold">Usuarios Exitosos</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600/30 to-red-700/30 rounded-2xl p-6 border border-pink-500/40 text-center group hover:scale-105 transition-transform duration-300">
                <Award className="text-pink-400 mx-auto mb-3 group-hover:animate-bounce" size={32} />
                <p className="text-3xl font-black text-pink-400">24H</p>
                <p className="text-pink-300 text-sm font-bold">Primeros Resultados</p>
              </div>
            </motion.div>

            {/* Testimonial rotativo premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-3xl p-8 mb-10 border border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-purple-500/5 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current animate-pulse" size={20} />
                  ))}
                  <span className="text-emerald-400 font-bold text-sm ml-2">VERIFICADO ✓</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-white font-bold text-xl mb-3">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-gray-300 font-medium">
                        - {testimonials[currentTestimonial].author}
                      </p>
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentTestimonial].location}
                      </p>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTAs principales premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(16, 185, 129, 0.5)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:via-green-400 hover:to-emerald-500 text-white font-black text-2xl py-8 px-12 rounded-3xl transition-all duration-300 shadow-2xl border-2 border-emerald-400 flex items-center justify-center gap-4 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <Zap size={28} className="relative z-10 animate-pulse" />
                <span className="relative z-10">ACCEDER AL MÉTODO AHORA</span>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                  HOT
                </div>
              </motion.button>
              
              <motion.button
                onClick={handleVideoClick}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-slate-700 via-purple-700 to-slate-800 hover:from-slate-600 hover:via-purple-600 hover:to-slate-700 text-white font-bold text-2xl py-8 px-12 rounded-3xl transition-all duration-300 border-2 border-purple-500 flex items-center justify-center gap-4 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play size={28} className="relative z-10" />
                <span className="relative z-10">VER DEMOSTRACIÓN</span>
              </motion.button>
            </motion.div>

            {/* Garantías premium */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm"
            >
              <div className="flex items-center gap-2 bg-emerald-500/20 px-6 py-3 rounded-full border border-emerald-500/40 backdrop-blur-sm">
                <Shield size={18} className="text-emerald-400" />
                <span className="font-bold text-emerald-300">Garantía Blindada 30 días</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/20 px-6 py-3 rounded-full border border-cyan-500/40 backdrop-blur-sm">
                <Clock size={18} className="text-cyan-400" />
                <span className="font-bold text-cyan-300">Acceso inmediato</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 px-6 py-3 rounded-full border border-purple-500/40 backdrop-blur-sm">
                <Star size={18} className="text-purple-400" />
                <span className="font-bold text-purple-300">Soporte VIP 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen del libro premium */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Efectos de brillo premium */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-cyan-400/30 to-purple-400/30 rounded-3xl blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Container del libro */}
              <motion.div 
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border-2 border-gradient-to-r from-emerald-500/50 to-purple-500/50 shadow-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg"
                  alt="UN JUEGO. UN SISTEMA. - Método Matemático Secreto"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Badge de precio premium */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 12 }}
                  transition={{ duration: 1, delay: 1.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  className="absolute -top-8 -right-8 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white px-8 py-6 rounded-2xl font-black text-xl border-3 border-pink-400 shadow-2xl shadow-pink-500/50 transform rotate-12"
                >
                  <div className="text-center">
                    <p className="text-sm line-through opacity-75">$544</p>
                    <p className="text-3xl animate-pulse">$17</p>
                    <p className="text-sm font-bold text-pink-200 animate-bounce">97% OFF</p>
                  </div>
                  <div className="absolute -top-2 -left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-spin">
                    HOT
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
