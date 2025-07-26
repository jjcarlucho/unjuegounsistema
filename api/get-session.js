const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { session_id } = req.query;

    if (!session_id) {
      res.status(400).json({ error: 'Session ID is required' });
      return;
    }

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // Return relevant session data
    res.status(200).json({
      customer_email: session.customer_details?.email || 'No disponible',
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      created: session.created,
      metadata: session.metadata,
    });
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ 
      error: 'Error retrieving session',
      details: error.message 
    });
  }
};
