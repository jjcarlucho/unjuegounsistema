const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const {
      priceAmount = 1700,
      currency = 'usd',
      productName = 'Sistema Matemático Premium',
      productDescription = 'Acceso completo al sistema matemático de alta conversión',
      successUrl,
      cancelUrl,
    } = req.body;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: productName,
              description: productDescription,
              images: ['https://your-domain.com/product-image.jpg'], // Add your product image URL
            },
            unit_amount: priceAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      billing_address_collection: 'required',
      customer_creation: 'always',
      metadata: {
        product: 'sistema-matematico-premium',
        version: '1.0',
      },
      // Add automatic tax calculation if needed
      automatic_tax: {
        enabled: false,
      },
      // Add shipping if needed
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'MX', 'AR', 'BR', 'CL', 'CO', 'PE', 'UY', 'VE', 'EC', 'BO', 'PY', 'GY', 'SR', 'FK'],
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      error: 'Error creating checkout session',
      details: error.message 
    });
  }
};
