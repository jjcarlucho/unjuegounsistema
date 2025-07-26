import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown, Zap, Shield, TrendingUp, Target, Award, Star, Clock } from 'lucide-react';
import { useStripe } from '../hooks/useStripe';

const PremiumComparison = () => {
  const comparisons = [
    {
      category: "Efectividad",
      others: "60-70% (si tienes suerte)",
      ours: "98.7% comprobado matemáticamente",
      icon: Target
    },
    {
      category: "Tiempo para ver resultados",
      others: "6-12 meses (tal vez)",
      ours: "24-48 horas garantizado",
      icon: Clock
    },
    {
      category: "Inversión inicial",
      others: "$50,000 - $100,000+",
      ours: "Solo $2,500 (90% descuento)",
      icon: TrendingUp
    },
    {
      category: "Soporte y entrenamiento",
      others: "Videos básicos y foros",
      ours: "Acceso directo al creador 24/7",
      icon: Shield
    },
    {
      category: "Garantía",
      others: "Sin garantía o muy limitada",
      ours: "30 días + $500 si no funciona",
      icon: Award
    },
    {
      category: "Actualizaciones",
      others: "Pagas por cada actualización",
      ours: "Actualizaciones gratuitas de por vida",
      icon: Star
    }
  ];

  const features = [
    "Método matemático probado en 500,000+ aplicaciones",
    "Sistema completamente automatizado",
    "Funciona en cualquier país del mundo",
    "No requiere experiencia previa",
    "Resultados desde el primer día",
    "Acceso de por vida sin pagos adicionales",
    "Soporte VIP 24/7 directo con el creador",
    "Garantía blindada de 30 días + $500 USD",
    "Comunidad exclusiva de usuarios exitosos",
    "Bonos valorados en $5,000 USD incluidos"
  ];

  const { redirectToCheckout, loading, error } = useStripe();

  const handlePurchaseClick = async () => {
    await redirectToCheckout();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/3 to-purple-500/5 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 mb-6">
            ¿POR QUÉ ELEGIR NUESTRO SISTEMA?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-4xl mx-auto">
            La diferencia es ABISMAL. Mira por qué somos la opción #1 mundial:
          </p>
        </motion.div>

        {/* Tabla de comparación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700 mb-16 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Característica</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Otros Sistemas</h3>
            </div>
            <div className="text-center bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-2xl p-4 border-2 border-emerald-500/50">
              <Crown className="text-emerald-400 mx-auto mb-2" size={32} />
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">✅ NUESTRO SISTEMA</h3>
              <p className="text-emerald-300 text-sm font-bold">LA ELECCIÓN OBVIA</p>
            </div>
          </div>

          <div className="space-y-6 mt-8">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-6 border-b border-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="text-cyan-400" size={24} />
                  <span className="text-white font-bold text-lg">{item.category}</span>
                </div>
                
                <div className="bg-red-600/20 rounded-xl p-4 border border-red-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <X className="text-red-400" size={20} />
                    <span className="text-red-400 font-bold text-sm">LIMITADO</span>
                  </div>
                  <p className="text-gray-300">{item.others}</p>
                </div>
                
                <div className="bg-emerald-600/20 rounded-xl p-4 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="text-emerald-400" size={20} />
                    <span className="text-emerald-400 font-bold text-sm">SUPERIOR</span>
                  </div>
                  <p className="text-white font-bold">{item.ours}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lo que incluye nuestro sistema */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-3xl p-8 border-2 border-emerald-500/50 mb-16"
        >
          <div className="text-center mb-8">
            <Crown className="text-emerald-400 mx-auto mb-4" size={48} />
            <h3 className="text-3xl md:text-4xl font-black text-emerald-400 mb-4">
              LO QUE OBTIENES CON NUESTRO SISTEMA
            </h3>
            <p className="text-emerald-300 text-xl font-bold">
              Valor total: $30,000 USD - Tu precio: $2,500 USD
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-emerald-600/20 rounded-xl p-4 border border-emerald-500/30"
              >
                <Check className="text-emerald-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-8 border-2 border-emerald-400 mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              🎯 LA DECISIÓN ES OBVIA 🎯
            </h3>
            <p className="text-xl text-emerald-100 font-bold mb-6">
              ¿Por qué conformarte con sistemas mediocres cuando puedes tener el MEJOR?
            </p>
            
            <motion.button
              onClick={handlePurchaseClick}
              disabled={loading}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white disabled:opacity-50 disabled:cursor-not-allowed text-emerald-700 font-black text-2xl py-6 px-12 rounded-2xl transition-all duration-300 shadow-2xl border-2 border-white flex items-center justify-center gap-3 mx-auto"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-700"></div>
                  PROCESANDO...
                </>
              ) : (
                <>
                  <Zap size={28} />
                  COMPRAR POR $17 USD
                </>
              )}
            </motion.button>
            
            <p className="text-emerald-200 text-sm font-bold mt-4">
              ⚡ La elección inteligente para personas inteligentes ⚡
            </p>
          </div>

          <p className="text-gray-400 text-lg font-bold">
            📊 El 96% elige nuestro sistema después de ver esta comparación
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumComparison;
