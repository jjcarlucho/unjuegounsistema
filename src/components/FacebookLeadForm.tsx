import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, CheckCircle, Zap } from 'lucide-react';
import { useMetaPixel } from '../hooks/useMetaPixel';

interface FacebookLeadFormProps {
  className?: string;
  title?: string;
  description?: string;
  onSuccess?: (data: any) => void;
  variant?: 'primary' | 'secondary' | 'popup';
}

const FacebookLeadForm: React.FC<FacebookLeadFormProps> = ({
  className = '',
  title = '🚨 ¡OBTÉN ACCESO INMEDIATO!',
  description = 'Únete a más de 500,000 personas que ya tienen acceso al sistema matemático exclusivo',
  onSuccess,
  variant = 'primary'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const { trackLead, trackButtonClick } = useMetaPixel();

  // Inicializar Facebook SDK
  useEffect(() => {
    // Cargar Facebook SDK si no está cargado
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.FB.init({
          appId: 'YOUR_FACEBOOK_APP_ID', // Reemplaza con tu App ID
          cookie: true,
          xfbml: true,
          version: 'v18.0'
        });
      };
      document.head.appendChild(script);
    }
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Debes aceptar los términos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    trackButtonClick('facebook_lead_form_submit');

    try {
      // Simular envío a Facebook Lead Ads
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Rastrear lead con Meta Pixel
      trackLead(17.00, 'USD');
      
      // Enviar datos a tu servidor (opcional)
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'facebook_lead_form',
          timestamp: new Date().toISOString()
        }),
      });

      setIsSubmitted(true);
      onSuccess?.(formData);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', agreeToTerms: false });
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Error al enviar el formulario. Intenta de nuevo.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30';
      case 'popup':
        return 'bg-gradient-to-br from-emerald-600/20 to-green-600/20 border-emerald-500/30';
      default:
        return 'bg-gradient-to-br from-emerald-600/20 to-green-600/20 border-emerald-500/30';
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${getVariantClasses()} rounded-2xl p-8 border-2 ${className}`}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4"
          >
            <CheckCircle size={32} className="text-white" />
          </motion.div>
          
          <h3 className="text-2xl font-black text-white mb-2">
            ¡FORMULARIO ENVIADO! 🎉
          </h3>
          
          <p className="text-green-300 mb-4">
            Gracias por tu interés. Te enviaremos acceso inmediato por email.
          </p>
          
          <div className="bg-green-600/20 rounded-xl p-4">
            <p className="text-green-200 text-sm">
              ✅ Revisa tu email (y carpeta de spam)<br/>
              ✅ Acceso inmediato al sistema<br/>
              ✅ Bonos incluidos automáticamente
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${getVariantClasses()} rounded-2xl p-8 border-2 ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-black text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-600'
              }`}
            />
          </div>
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Teléfono (opcional) */}
        <div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              placeholder="Tu teléfono (opcional)"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>

        {/* Términos y condiciones */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
            className="mt-1 w-4 h-4 text-emerald-600 bg-gray-800 border-gray-600 rounded focus:ring-emerald-500 focus:ring-2"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
            Acepto recibir información sobre el sistema matemático y promociones especiales. 
            <a href="/terminos" className="text-emerald-400 hover:underline ml-1">
              Ver términos
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>
        )}

        {/* Error general */}
        {errors.submit && (
          <p className="text-red-400 text-sm text-center">{errors.submit}</p>
        )}

        {/* Botón de envío */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-lg py-4 px-6 rounded-xl transition-all duration-300 shadow-xl border-2 border-emerald-400 flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ENVIANDO...
            </>
          ) : (
            <>
              <Zap size={20} />
              ¡QUIERO ACCESO INMEDIATO!
            </>
          )}
        </motion.button>

        {/* Información de seguridad */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            🔒 Tus datos están protegidos • Sin spam • Acceso inmediato
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default FacebookLeadForm; 