import React from 'react';
import { Calculator, Zap, TrendingUp, Brain, Shield, Target } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import SectionTitle from './SectionTitle';

const benefits = [
  {
    icon: <Calculator className="w-8 h-8 text-yellow-400" />,
    title: "Precisión Matemática del 98%",
    description: "Opera con la confianza de un sistema probado y verificado, que acierta 98 de cada 100 veces."
  },
  {
    icon: <Brain className="w-8 h-8 text-yellow-400" />,
    title: "Decisiones 100% Racionales",
    description: "Olvídate del estrés y la impulsividad. El sistema toma las decisiones por ti, basado en pura lógica."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
    title: "Crecimiento Exponencial y Seguro",
    description: "Acumula ganancias constantes y predecibles. Convierte pequeñas victorias en una fortuna a largo plazo."
  },
  {
    icon: <Target className="w-8 h-8 text-yellow-400" />,
    title: "Conviértete en un Inversor de Élite",
    description: "Adopta la mentalidad de los profesionales que no apuestan, sino que invierten con estrategia."
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
    title: "Libertad Financiera Sostenible",
    description: "Construye un futuro financiero sólido y sin sobresaltos, con un método diseñado para el éxito a largo plazo."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Décadas de Experiencia a tu Alcance",
    description: "Accede a un sistema perfeccionado durante décadas y probado en más de 500,000 escenarios reales."
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // más rápido
    },
  },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Por qué este método <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">transforma vidas?</span>
          </h2>
          <p className="text-xl text-yellow-400 max-w-3xl mx-auto font-semibold">
            Estos no son simples beneficios, son los pilares de tu nueva realidad financiera. Esto es lo que obtienes al unirte:
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ scale: 1.03, boxShadow: '0 0 18px #D4AF37aa' }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="premium-glass flex flex-col items-center text-center p-8 rounded-2xl border border-yellow-500/10 shadow-xl cursor-pointer group"
            >
              <div className="mb-6 group-hover:animate-gold-glow">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 font-serif mb-2 drop-shadow">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-lg font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;