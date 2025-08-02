import React from 'react';
import { Shield, Lock, CreditCard, CheckCircle } from 'lucide-react';

const PaymentSecurityInfo: React.FC = () => {
  return (
    <div className="mt-8 space-y-6">
      {/* Badges de seguridad */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Lock size={16} className="text-green-400" />
          <span>Pago 100% Seguro</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-blue-400" />
          <span>SSL Encriptado</span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard size={16} className="text-purple-400" />
          <span>Stripe Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-emerald-400" />
          <span>Garantía 30 días</span>
        </div>
      </div>

      {/* Métodos de pago aceptados */}
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-3">Métodos de pago aceptados:</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="bg-white rounded px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">VISA</div>
          <div className="bg-white rounded px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">MASTERCARD</div>
          <div className="bg-white rounded px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">AMEX</div>
          <div className="bg-white rounded px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">DISCOVER</div>
          <div className="bg-white rounded px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">PAYPAL</div>
        </div>
      </div>

      {/* Garantía destacada */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Shield className="text-green-400" size={24} />
          <span className="text-green-400 font-bold text-lg">GARANTÍA DE 30 DÍAS</span>
        </div>
        <p className="text-green-300 text-sm leading-relaxed">
          Si no estás completamente satisfecho con el sistema, te devolvemos tu dinero completo sin preguntas. 
          Tu satisfacción es nuestra prioridad.
        </p>
      </div>

      {/* Información adicional de seguridad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
          <div className="text-emerald-400 text-2xl mb-2">🔒</div>
          <h4 className="text-white font-semibold mb-1">Pago Seguro</h4>
          <p className="text-gray-400 text-xs">Tus datos están protegidos con encriptación SSL de 256 bits</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
          <div className="text-blue-400 text-2xl mb-2">⚡</div>
          <h4 className="text-white font-semibold mb-1">Acceso Inmediato</h4>
          <p className="text-gray-400 text-xs">Recibe tu producto digital al instante después del pago</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
          <div className="text-purple-400 text-2xl mb-2">📧</div>
          <h4 className="text-white font-semibold mb-1">Soporte 24/7</h4>
          <p className="text-gray-400 text-xs">Equipo de soporte disponible para ayudarte en cualquier momento</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSecurityInfo; 