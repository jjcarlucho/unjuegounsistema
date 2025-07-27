import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    { name: "Beneficios", href: "#benefits" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contenido", href: "#what-is" },
    { name: "Bonos", href: "#bonuses" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-black py-16 border-t-2 border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Columna 1: Logo y Misión */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-3">
              UN JUEGO. UN SISTEMA.
            </h3>
            <p className="text-gray-400">
              Democratizando el acceso a estrategias financieras de élite a través de un sistema matemático simple y poderoso.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto y Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Soporte y Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:soporte@unjuegounsistema.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  soporte@unjuegounsistema.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Términos de Servicio</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Política de Privacidad</a>
              </li>
            </ul>
          </div>
        </div>

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