import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import Tilt from 'react-parallax-tilt';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = () => {
  // Detectar si el usuario prefiere menos animaciones
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Configuración de partículas doradas optimizada
  const particlesInit = async (main: any) => {
    if (!prefersReducedMotion) {
      await loadFull(main);
    }
  };
  const particlesOptions = {
    fullScreen: false,
    background: { color: 'transparent' },
    particles: {
      number: { value: prefersReducedMotion ? 0 : 14, density: { enable: true, value_area: 800 } },
      color: { value: '#D4AF37' },
      shape: { type: 'circle' },
      opacity: { value: 0.10, random: true },
      size: { value: 2, random: { enable: true, minimumValue: 1 } },
      move: { enable: !prefersReducedMotion, speed: 0.4, direction: 'none' as const, random: true, straight: false, outModes: { default: 'out' as const } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181A20] via-[#23262F] to-[#101014] overflow-hidden">
      {/* Partículas doradas animadas */}
      <Particles className="absolute inset-0 z-0" id="tsparticles" init={particlesInit} options={particlesOptions} />
      {/* Fondo premium con líneas doradas sutiles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="720" cy="450" r="400" stroke="#D4AF37" strokeOpacity="0.07" strokeWidth="2" />
          <circle cx="720" cy="450" r="600" stroke="#D4AF37" strokeOpacity="0.04" strokeWidth="2" />
          <circle cx="720" cy="450" r="800" stroke="#D4AF37" strokeOpacity="0.02" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl w-full px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-6xl md:text-7xl font-serif font-extrabold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            <span className="block text-yellow-400 text-2xl md:text-3xl font-bold mb-2 tracking-widest uppercase">¡ATENCIÓN! PREVENTA SECRETA</span>
            <span className="block">El sistema matemático <span className="text-yellow-400">prohibido</span></span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">que cambia tu juego para siempre</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto lg:mx-0 drop-shadow">
            Descubre el <span className="text-yellow-400 font-semibold">método secreto</span> con <span className="text-red-400 font-bold">98% de efectividad</span> que la élite ha usado en silencio durante décadas. Acceso anticipado, cupos ultra limitados. ¿Serás uno de los pocos?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <motion.div
              whileHover={{ scale: 1.07, boxShadow: '0 0 32px #D4AF37aa' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-block"
            >
              <Button
                type="button"
                variant="primary"
                className="backdrop-blur bg-white/10 border border-yellow-500/30 shadow-xl hover:shadow-yellow-400/30 text-lg px-10 py-5 group"
                onClick={() => {
                  const el = document.getElementById('final-cta');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                Quiero mi acceso exclusivo
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <a href="#benefits" className="text-yellow-400 underline text-lg font-semibold hover:text-yellow-300 transition">Ver beneficios</a>
          </div>
          <p className="text-sm text-yellow-400 mt-6 italic font-bold">
            Solo para los primeros. No garantizado para todos.
          </p>
        </motion.div>
        {/* Imagen premium del libro con efecto tilt 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <Tilt glareEnable={true} glareMaxOpacity={0.25} glareColor="#D4AF37" glarePosition="all" tiltMaxAngleX={12} tiltMaxAngleY={12} className="w-[340px] h-[480px]">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 blur-2xl rounded-3xl z-0" />
              <img
                src="/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg"
                alt="Tapa del libro Un Juego Un Sistema"
                loading="lazy"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-yellow-500/20"
                style={{ boxShadow: '0 8px 40px 0 #D4AF37aa' }}
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;