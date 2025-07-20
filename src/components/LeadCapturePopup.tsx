import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, CheckCircle } from 'lucide-react';

interface LeadCapturePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCapturePopup: React.FC<LeadCapturePopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío (aquí puedes integrar con tu servicio de email)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);

    // Redirigir a WhatsApp después de 2 segundos con los datos del formulario
    setTimeout(() => {
      const message = encodeURIComponent(`🚨 ¡QUIERO ACCEDER AL SISTEMA MATEMÁTICO!

📋 Mis datos:
• Nombre: ${formData.nombreCompleto}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}

He completado el formulario y estoy listo para asegurar mi cupo. ¿Cuál es el siguiente paso?`);

      window.open(`https://wa.me/+17862623985?text=${message}`, '_blank');
      onClose();
      setSubmitted(false);
      setFormData({ nombreCompleto: '', email: '', telefono: '' });
    }, 2000);
  };

  const isFormValid = formData.nombreCompleto && formData.email && formData.telefono;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-md w-full border-2 border-yellow-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 px-4 py-2 rounded-full border border-yellow-500/30 mb-4">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-sm">ACCESO INMEDIATO</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    🚨 ¡Asegura tu cupo AHORA!
                  </h3>
                  <p className="text-gray-300">
                    Completa tus datos para contactarte inmediatamente
                  </p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="nombreCompleto"
                      value={formData.nombreCompleto}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo *"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Tu teléfono (con código de país) *"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Tu email *"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all"
                      required
                    />
                  </div>

                  {/* Nota sobre campos obligatorios */}
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      * Todos los campos son obligatorios
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                    whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isFormValid
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black shadow-lg'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Procesando...
                      </div>
                    ) : (
                      '🚀 PROCEDER AL PAGO SEGURO'
                    )}
                  </motion.button>
                </form>

                {/* Footer */}
                <div className="text-center mt-6">
                  <p className="text-gray-400 text-sm">
                    🔒 Pago 100% seguro con Hotmart
                  </p>
                  <p className="text-yellow-400 text-xs mt-2 font-bold">
                    Valor total: $844 USD - Solo hoy: $17 USD
                  </p>
                </div>
              </>
            ) : (
              /* Estado de éxito */
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="mb-6"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ¡Datos registrados!
                  </h3>
                  <p className="text-gray-300">
                    Redirigiendo al pago seguro...
                  </p>
                </motion.div>
                
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCapturePopup;
