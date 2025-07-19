import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail, Star, Gift, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Verificar la sesión de pago
      fetchSessionData(sessionId);
    }
  }, [sessionId]);

  const fetchSessionData = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setSessionData(data);
      }
    } catch (error) {
      console.error('Error fetching session data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-white text-xl">Verificando tu pago...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Encabezado de éxito */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6"
          >
            <CheckCircle size={48} className="text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            ¡PAGO EXITOSO! 🎉
          </h1>
          
          <p className="text-xl md:text-2xl text-green-400 font-bold mb-2">
            ¡Felicidades! Ya tienes acceso al sistema matemático
          </p>
          
          <p className="text-gray-300 text-lg">
            Orden #{sessionId?.slice(-8).toUpperCase()}
          </p>
        </motion.div>

        {/* Lo que recibirás */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700 mb-8"
        >
          <h2 className="text-3xl font-black text-white mb-6 text-center">
            📦 LO QUE RECIBIRÁS EN TU EMAIL
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-600/20 rounded-xl p-6 border border-emerald-500/30">
              <Download className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Sistema Matemático</h3>
              <p className="text-emerald-300 text-sm">PDF completo con el método paso a paso</p>
              <p className="text-emerald-400 font-bold mt-2">Valor: $47 USD</p>
            </div>
            
            <div className="bg-yellow-600/20 rounded-xl p-6 border border-yellow-500/30">
              <Gift className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Bono 1: Su Deseo Es Su Mandato</h3>
              <p className="text-yellow-300 text-sm">Entrenamiento completo de manifestación</p>
              <p className="text-yellow-400 font-bold mt-2">Valor: $500 USD</p>
            </div>
            
            <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30">
              <Gift className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Bono 2: Tapping (TFT)</h3>
              <p className="text-blue-300 text-sm">Técnica de liberación emocional</p>
              <p className="text-blue-400 font-bold mt-2">Valor: $297 USD</p>
            </div>
          </div>
          
          <div className="text-center mt-6 bg-green-600/20 rounded-xl p-4">
            <p className="text-white font-bold text-xl">
              Valor Total: <span className="line-through text-gray-400">$844 USD</span>
            </p>
            <p className="text-green-400 font-black text-2xl">
              Tu Precio: $17 USD ✨
            </p>
          </div>
        </motion.div>

        {/* Instrucciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-blue-400" size={24} />
            <h3 className="text-white font-bold text-xl">📧 REVISA TU EMAIL</h3>
          </div>
          
          <div className="space-y-3 text-blue-300">
            <p>✅ Te hemos enviado un email con todos los archivos</p>
            <p>✅ Si no lo ves, revisa tu carpeta de SPAM</p>
            <p>✅ El email viene de: noreply@tudominio.com</p>
            <p>✅ Tienes acceso inmediato y de por vida</p>
          </div>
        </motion.div>

        {/* Próximos pasos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 mb-8"
        >
          <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
            <ArrowRight className="text-purple-400" size={24} />
            🚀 PRÓXIMOS PASOS
          </h3>
          
          <div className="space-y-3 text-purple-300">
            <p><strong>1.</strong> Descarga todos los archivos del email</p>
            <p><strong>2.</strong> Lee primero el sistema matemático principal</p>
            <p><strong>3.</strong> Aplica el método paso a paso</p>
            <p><strong>4.</strong> Disfruta de los bonos incluidos</p>
            <p><strong>5.</strong> ¡Empieza a ver resultados!</p>
          </div>
        </motion.div>

        {/* Soporte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-3">
              ¿Necesitas ayuda? 🤝
            </h3>
            <p className="text-gray-300 mb-4">
              Estamos aquí para ayudarte en todo momento
            </p>
            <a
              href="https://wa.me/+17862623985?text=Hola, acabo de comprar el sistema y necesito ayuda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              <span>💬</span>
              Contactar Soporte VIP
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
