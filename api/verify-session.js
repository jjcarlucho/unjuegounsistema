const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const { session_id } = req.query;

  if (!session_id) {
    return res.status(400).json({ error: 'Session ID is required' });
  }

  try {
    // Recuperar la sesión de Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // Verificar que el pago fue exitoso
    if (session.payment_status !== 'paid') {
      return res.status(400).json({ 
        error: 'Payment not completed',
        payment_status: session.payment_status 
      });
    }

    // Devolver información de la sesión
    res.status(200).json({
      id: session.id,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email,
      customer_name: session.customer_details?.name,
      amount_total: session.amount_total,
      currency: session.currency,
      created: session.created,
      metadata: session.metadata
    });

  } catch (error) {
    console.error('Error verifying session:', error);
    res.status(500).json({ 
      error: 'Error verifying session',
      message: error.message 
    });
  }
};
