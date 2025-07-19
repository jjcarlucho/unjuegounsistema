import { loadStripe } from '@stripe/stripe-js';

// Configuración de Stripe
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51QKrOhP8nKjGzQhOYourKeyHere';

export const stripePromise = loadStripe(stripePublishableKey);

// Configuración del producto
export const PRODUCT_CONFIG = {
  name: 'UN JUEGO. UN SISTEMA. - Método Matemático Secreto',
  description: 'Sistema matemático completo + Bonos valorados en $797 USD',
  price: 1700, // $17.00 en centavos
  currency: 'usd',
  images: ['/WhatsApp Image 2025-07-08 at 11.49.39 PM.jpeg'],
  metadata: {
    product_type: 'digital_book',
    includes_bonuses: 'true',
    bonus_value: '797',
    total_value: '844'
  }
};

// Función para crear sesión de checkout
export const createCheckoutSession = async (customerEmail?: string) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
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

    if (!response.ok) {
      throw new Error('Error creating checkout session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error:', error);
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
