import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { useMetaPixel } from '../hooks/useMetaPixel';

interface HotmartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const HotmartModal: React.FC<HotmartModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { trackPurchase, trackButtonClick } = useMetaPixel();

  const handlePaymentSuccess = () => {
    // Rastrear compra exitosa con Meta Pixel
    trackPurchase(17.00, 'USD', `hotmart_${Date.now()}`);
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      onSuccess?.();
    }, 3000);
  };

  const handleExternalClick = () => {
    // Rastrear clic en botón de pago
    trackButtonClick('hotmart_modal_payment_button');
    
    setIsLoading(true);
    window.open('https://pay.hotmart.com/X101172705D', '_blank');
    // Simular éxito después de un tiempo (en producción esto vendría de webhook)
    setTimeout(() => {
      setIsLoading(false);
      handlePaymentSuccess();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">🚨 PREVENTA EXCLUSIVA</h2>
                  <p className="text-emerald-100 mt-1">Acceso Inmediato al Sistema Matemático</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {!showSuccess ? (
                <div className="text-center">
                  {/* Precio */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-gray-500 line-through text-xl">$499</span>
                      <span className="text-4xl font-bold text-emerald-600">$17</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        96% OFF
                      </span>
                    </div>
                    <p className="text-red-600 font-bold text-sm">🔥 SOLO 23 CUPOS DISPONIBLES</p>
                  </div>

                  {/* Beneficios */}
                  <div className="mb-6 text-left">
                    <h3 className="font-bold text-lg mb-3">✅ Lo que obtienes:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-emerald-600" size={16} />
                        Ebook "Un Juego, Un Sistema" (Valor: $499)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-emerald-600" size={16} />
                        Bonos valorados en $797 USD
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-emerald-600" size={16} />
                        Acceso inmediato y permanente
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-emerald-600" size={16} />
                        Garantía de 30 días
                      </li>
                    </ul>
                  </div>

                  {/* Botón de pago */}
                  <button
                    onClick={handleExternalClick}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold text-xl py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <ExternalLink size={20} />
                        PAGAR AHORA $17 USD
                      </>
                    )}
                  </button>

                  {/* Seguridad */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-500 text-sm">
                      🔒 Pago 100% seguro con Hotmart
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      SSL encriptado • Garantía de 30 días
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="text-emerald-600 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                    ¡Pago Exitoso!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tu acceso ha sido activado. Revisa tu email para las instrucciones.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-sm text-emerald-800">
                      📧 Verifica tu bandeja de entrada (y spam)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HotmartModal; 