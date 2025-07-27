import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t-2 border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"></div>

        <div className="text-center text-gray-500 text-sm">
          <p className="mb-4">
            © 2025 UN JUEGO. UN SISTEMA. Todos los derechos reservados. 
          </p>
          <p className="text-xs max-w-3xl mx-auto">
            <strong>Descargo de responsabilidad:</strong> Este producto es para fines educativos e informativos. No constituye asesoramiento financiero. Los resultados pasados no garantizan rendimientos futuros. Actúe siempre con diligencia y bajo su propio riesgo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;