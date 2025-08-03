import { loadStripe } from '@stripe/stripe-js';

// Configuración de Stripe
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('❌ VITE_STRIPE_PUBLISHABLE_KEY no está configurada');
  console.log('📋 Agrega tu clave pública de Stripe en las variables de entorno');
}

export const stripePromise = loadStripe(stripePublishableKey);

// Configuración del producto
export const PRODUCT_CONFIG = {
  name: 'UN JUEGO. UN SISTEMA. - Método Matemático Secreto',
  description: 'Sistema matemático completo + Bonos valorados en $1,296 USD',
  price: 4700, // $47.00 en centavos
  currency: 'usd',
  images: ['/cover.jpeg'],
  metadata: {
    product_type: 'digital_book',
    includes_bonuses: 'true',
    bonus_value: '1296',
    total_value: '1296',
    preventa: 'true',
    cupos_restantes: '23'
  }
};

// Función para redirigir a Stripe Checkout usando enlace directo
export const redirectToCheckout = async (customerEmail?: string) => {
  try {
    // URL directa de Stripe Checkout (necesitas crear esto en tu dashboard de Stripe)
    const checkoutUrl = 'https://buy.stripe.com/test_28o5kC8Xj2Kj8wU6EF';
    
    // Agregar parámetros de éxito y cancelación
    const successUrl = encodeURIComponent(`${window.location.origin}/success`);
    const cancelUrl = encodeURIComponent(`${window.location.origin}/?canceled=true`);
    
    const finalUrl = `${checkoutUrl}?success_url=${successUrl}&cancel_url=${cancelUrl}`;
    
    // Redirigir al usuario
    window.location.href = finalUrl;
    
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};
