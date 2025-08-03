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

// Función para crear sesión de checkout
export const createCheckoutSession = async (customerEmail?: string) => {
  try {
    // Intentar diferentes URLs
    const urls = [
      'https://project55.vercel.app',
      'https://project55-6vtestfjp-jonathans-projects-53172663.vercel.app',
      window.location.origin
    ];

    let lastError;
    
    for (const baseUrl of urls) {
      try {
        console.log(`Intentando conectar a: ${baseUrl}`);
        
        const response = await fetch(`${baseUrl}/api/create-checkout-session`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...PRODUCT_CONFIG,
            customer_email: customerEmail,
            success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${window.location.origin}/?canceled=true`,
          }),
        });

        if (response.ok) {
          const session = await response.json();
          console.log('✅ Sesión creada exitosamente');
          return session;
        } else {
          const errorData = await response.json().catch(() => ({}));
          lastError = new Error(errorData.message || `HTTP error! status: ${response.status}`);
          console.log(`❌ Error con ${baseUrl}:`, lastError.message);
        }
      } catch (error) {
        lastError = error;
        console.log(`❌ Error de conexión con ${baseUrl}:`, error.message);
      }
    }

    // Si todas las URLs fallan, mostrar error
    throw lastError || new Error('No se pudo conectar a ningún servidor');

  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

// Función para redirigir a Stripe Checkout
export const redirectToCheckout = async (customerEmail?: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe not loaded');

    const session = await createCheckoutSession(customerEmail);
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};
