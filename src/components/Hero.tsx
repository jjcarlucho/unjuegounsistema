import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-400 mb-8">UN JUEGO. UN SISTEMA.</h1>
        <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold text-xl px-12 py-6 rounded-full">
          ACCEDER AL MÉTODO AHORA
        </button>
      </div>
    </section>
  );
};

export default Hero;
