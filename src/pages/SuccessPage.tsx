import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Download, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface SessionData {
  customer_email: string;
  payment_status: string;
  amount_total: number;
  currency: string;
}

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Fetch session data from our API
      fetch(`/api/get-session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching session:', err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-400 mx-auto"></div>
          <p className="text-white mt-4">Verificando tu pago...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-4">
          ¡Pago Exitoso! 🎉
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Tu compra se ha procesado correctamente. Ya tienes acceso completo al Sistema Matemático Premium.
        </p>

        {sessionData && (
          <div className="bg-white/5 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Detalles de tu compra:</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> {sessionData.customer_email}</p>
              <p><strong>Monto:</strong> ${(sessionData.amount_total / 100).toFixed(2)} {sessionData.currency.toUpperCase()}</p>
              <p><strong>Estado:</strong> <span className="text-emerald-400">Pagado</span></p>
            </div>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Download className="w-5 h-5" />
            Descargar Sistema Matemático
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Star className="w-5 h-5" />
            Acceder al Área de Miembros
          </motion.button>
        </div>

        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-yellow-200 text-sm">
            <strong>Importante:</strong> Guarda este email de confirmación. Recibirás las instrucciones de acceso en tu correo electrónico en los próximos 5 minutos.
          </p>
        </div>

        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
