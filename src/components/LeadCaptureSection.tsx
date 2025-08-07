import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Zap, Gift, Shield } from 'lucide-react';
import FacebookLeadForm from './FacebookLeadForm';

const LeadCaptureSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleLeadSuccess = (data: any) => {
    console.log('🎉 Lead capturado:', data);
    // Aquí puedes agregar lógica adicional como:
    // - Redirección a página de agradecimiento
    // - Envío de email automático
    // - Integración con CRM
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/3 to-purple-500/5 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                🚨 ÚLTIMA OPORTUNIDAD
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Solo quedan <span className="text-red-400 font-bold">7 cupos</span> para acceder al sistema matemático exclusivo. 
                Una vez agotados, se cierra para siempre.
              </p>

              {/* Beneficios */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Gift className="text-emerald-400" size={24} />
                  <span className="text-white font-semibold">Sistema Matemático Completo (Valor: $499)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-400" size={24} />
                  <span className="text-white font-semibold">Bonos Valorados en $797 USD</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-blue-400" size={24} />
                  <span className="text-white font-semibold">Acceso Inmediato y Permanente</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-green-400" size={24} />
                  <span className="text-white font-semibold">Garantía de 30 Días</span>
                </div>
              </div>

              {/* Precio */}
              <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-2xl p-6 border border-emerald-500/30 mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-gray-400 line-through text-2xl">$499</span>
                  <span className="text-5xl font-black text-emerald-400">$17</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    96% OFF
                  </span>
                </div>
                <p className="text-emerald-300 font-bold text-lg">
                  ¡Ahorras $482 USD!
                </p>
              </div>

              {/* Social proof */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400">
                <Users size={20} />
                <span className="text-sm">Más de 500,000 personas ya tienen acceso</span>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FacebookLeadForm
              title="🚨 ¡OBTÉN ACCESO INMEDIATO!"
              description="Únete a más de 500,000 personas que ya tienen acceso al sistema matemático exclusivo"
              onSuccess={handleLeadSuccess}
              variant="primary"
            />
          </motion.div>
        </div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-4">
              🔒 ¿Por qué es seguro?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <Shield className="text-green-400 mx-auto mb-2" size={20} />
                <p>Pago 100% seguro con Hotmart</p>
              </div>
              <div>
                <Zap className="text-blue-400 mx-auto mb-2" size={20} />
                <p>Acceso inmediato después del pago</p>
              </div>
              <div>
                <Gift className="text-yellow-400 mx-auto mb-2" size={20} />
                <p>Garantía de 30 días sin preguntas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCaptureSection; 