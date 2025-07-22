import React, { useState, useEffect } from 'react';
import { Users, Clock, Zap, AlertTriangle, TrendingUp, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { redirectToCheckout } from '../lib/stripe';

const ScarcitySection: React.FC = () => {
  const [spotsLeft, setSpotsLeft] = useState(7);
  const [recentPurchases, setRecentPurchases] = useState([
    { name: "Carlos M.", location: "México", time: "hace 2 min" },
    { name: "Ana L.", location: "Colombia", time: "hace 5 min" },
    { name: "Roberto S.", location: "España", time: "hace 8 min" },
    { name: "María G.", location: "Argentina", time: "hace 12 min" },
    { name: "José R.", location: "Chile", time: "hace 15 min" }
  ]);
  const [currentViewers, setCurrentViewers] = useState(247);

  // Simulación de compras en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      const names = ["Diego", "Carmen", "Luis", "Patricia", "Fernando", "Sofía", "Miguel", "Valentina", "Carlos", "Ana", "Roberto", "María", "José", "Isabella", "Alejandro", "Camila"];
      const lastNames = ["R.", "M.", "G.", "L.", "S.", "P.", "C.", "V.", "H.", "T.", "F.", "D.", "B.", "N.", "Q.", "Z."];
      const countries = ["México", "Colombia", "España", "Argentina", "Chile", "Perú", "Venezuela", "Ecuador", "Uruguay", "Costa Rica", "Guatemala", "Honduras"];
      const timeOptions = ["hace 1 min", "hace 2 min", "hace 3 min", "hace 4 min", "hace 5 min", "hace 7 min", "hace 8 min", "hace 12 min", "hace 15 min"];

      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      const randomTime = timeOptions[Math.floor(Math.random() * timeOptions.length)];

      const newPurchase = {
        name: `${randomName} ${randomLastName}`,
        location: randomCountry,
        time: randomTime
      };

      setRecentPurchases(prev => {
        const updated = [newPurchase, ...prev];
        return updated.slice(0, 5);
      });

      // Reducir cupos disponibles ocasionalmente
      if (Math.random() < 0.3 && spotsLeft > 1) {
        setSpotsLeft(prev => prev - 1);
      }
    }, 15000); // Cada 15 segundos

    return () => clearInterval(interval);
  }, [spotsLeft]);

  // Simulación de viewers en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentViewers(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        const newValue = prev + change;
        return Math.max(200, Math.min(300, newValue));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleStripeClick = async () => {
    try {
      await redirectToCheckout();
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
      alert('Error procesando el pago. Por favor, intenta de nuevo.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-black to-red-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-orange-500/10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 mb-6">
            🚨 ESCASEZ EXTREMA 🚨
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold max-w-4xl mx-auto">
            La demanda ha sido BRUTAL. Solo quedan unos pocos cupos disponibles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cupos restantes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-red-800 to-red-900 rounded-3xl p-8 border-2 border-red-400 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-orange-500 animate-pulse"></div>
            
            <div className="text-center">
              <AlertTriangle className="text-red-400 mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-black text-white mb-4">CUPOS LIMITADOS</h3>
              
              <div className="bg-black/50 rounded-2xl p-6 mb-6">
                <p className="text-red-400 text-lg font-bold mb-2">Cupos Restantes:</p>
                <div className="text-6xl font-black text-yellow-400 mb-2">
                  {spotsLeft}
                </div>
                <p className="text-white font-bold">de 50 cupos iniciales</p>
              </div>

              <div className="bg-red-700/50 rounded-xl p-4 mb-6">
                <p className="text-white font-bold text-sm">
                  ⚠️ Una vez agotados, el sistema se cierra por tiempo indefinido
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-yellow-400">
                <Eye size={20} />
                <span className="font-bold">{currentViewers} personas viendo ahora</span>
              </div>
            </div>
          </motion.div>

          {/* Compras recientes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 border-2 border-green-400"
          >
            <div className="text-center mb-6">
              <TrendingUp className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-black text-white mb-2">COMPRAS EN VIVO</h3>
              <p className="text-green-300 font-bold">Personas que acaban de asegurar su cupo:</p>
            </div>

            <div className="space-y-3">
              <AnimatePresence>
                {recentPurchases.map((purchase, index) => (
                  <motion.div
                    key={`${purchase.name}-${purchase.time}-${index}`}
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/30 rounded-xl p-4 border border-green-500/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div>
                          <p className="text-white font-bold text-sm">{purchase.name}</p>
                          <p className="text-green-300 text-xs">{purchase.location}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs">{purchase.time}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-6 text-center">
              <div className="bg-green-700/50 rounded-xl p-3">
                <p className="text-green-200 font-bold text-sm">
                  🔥 +127 personas han asegurado su cupo en las últimas 24h
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Estadísticas de urgencia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-6 text-center border border-orange-400">
            <Users className="text-orange-200 mx-auto mb-3" size={32} />
            <p className="text-2xl font-black text-white">86%</p>
            <p className="text-orange-200 font-bold text-sm">Cupos Vendidos</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-pink-700 rounded-2xl p-6 text-center border border-red-400">
            <Clock className="text-red-200 mx-auto mb-3" size={32} />
            <p className="text-2xl font-black text-white">2.3 min</p>
            <p className="text-red-200 font-bold text-sm">Tiempo promedio de decisión</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-600 to-orange-700 rounded-2xl p-6 text-center border border-yellow-400">
            <Zap className="text-yellow-200 mx-auto mb-3" size={32} />
            <p className="text-2xl font-black text-white">24h</p>
            <p className="text-yellow-200 font-bold text-sm">Para cerrar definitivamente</p>
          </div>
        </motion.div>

        {/* CTA de urgencia */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 border-2 border-yellow-400 mb-6">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              ⚡ NO PIERDAS TU CUPO ⚡
            </h3>
            <p className="text-xl text-red-100 font-bold mb-6">
              Una vez que se agoten los {spotsLeft} cupos restantes, el acceso se cierra PARA SIEMPRE
            </p>
            
            <button
              onClick={handleStripeClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-xl py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-400"
            >
              💳 PAGAR CON TARJETA - $17
            </button>

            <p className="text-yellow-400 text-sm font-bold mt-4">
              ⚡ Pago seguro con Stripe ⚡
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScarcitySection;
