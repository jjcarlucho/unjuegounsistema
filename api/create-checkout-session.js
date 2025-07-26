const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  // Verificar que Stripe esté configurado
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('❌ STRIPE_SECRET_KEY no está configurada');
    return res.status(500).json({
      error: 'Stripe no está configurado correctamente',
      message: 'STRIPE_SECRET_KEY no encontrada en variables de entorno'
    });
  }

  try {
    const {
      name,
      description,
      price,
      currency,
      images,
      metadata,
      customer_email,
      success_url,
      cancel_url
    } = req.body;

    console.log('🚀 Creando sesión de checkout:', {
      name,
      price,
      currency,
      customer_email: customer_email || 'No proporcionado'
    });

    // Crear sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: name,
              description: description,
              images: images,
              metadata: metadata,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: success_url,
      cancel_url: cancel_url,
      customer_email: customer_email,
      metadata: {
        ...metadata,
        customer_email: customer_email || '',
        purchase_timestamp: new Date().toISOString(),
      },
      // Configuración adicional
      payment_intent_data: {
        metadata: {
          ...metadata,
          customer_email: customer_email || '',
        },
      },
      // Configurar emails automáticos de Stripe
      customer_creation: 'always',
      invoice_creation: {
        enabled: true,
      },
    });

    console.log('✅ Sesión creada exitosamente:', session.id);
    res.status(200).json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('❌ Error creating checkout session:', error);
    res.status(500).json({
      error: 'Error creating checkout session',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
