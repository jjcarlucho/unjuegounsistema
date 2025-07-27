import React from 'react';
import { useStripe } from '../hooks/useStripe';

const UltraFinalCTA: React.FC = () => {
  const { redirectToCheckout, loading, error } = useStripe();

  return (
    <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="mt-4 text-xl text-gray-300">
          Únete a miles de clientes satisfechos y comienza a ver resultados hoy.
        </p>
        <div className="mt-8">
          <button
            onClick={redirectToCheckout}
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Procesando...' : 'Comenzar Ahora'}
          </button>
          {error && <p className="mt-4 text-red-500">Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UltraFinalCTA;
