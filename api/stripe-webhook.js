const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Manejar el evento
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful:', session);
      
      // Aquí puedes:
      // 1. Guardar la orden en tu base de datos
      // 2. Enviar email con el producto
      // 3. Activar acceso al usuario
      await handleSuccessfulPayment(session);
      break;

    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent succeeded:', paymentIntent);
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('Payment failed:', failedPayment);
      await handleFailedPayment(failedPayment);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
}

// Función para manejar pago exitoso
async function handleSuccessfulPayment(session) {
  try {
    const customerEmail = session.customer_details?.email || session.metadata?.customer_email;
    const customerName = session.customer_details?.name || 'Cliente';
    const amountPaid = session.amount_total / 100; // Convertir de centavos a dólares
    
    console.log('Processing successful payment:', {
      email: customerEmail,
      name: customerName,
      amount: amountPaid,
      sessionId: session.id
    });

    // Aquí integrarías con tu sistema de emails
    // Por ejemplo, con Resend, SendGrid, etc.
    await sendProductEmail(customerEmail, customerName, session);
    
    // Guardar en base de datos (si tienes una)
    await saveOrderToDatabase(session);
    
  } catch (error) {
    console.error('Error handling successful payment:', error);
  }
}

// Función para manejar pago fallido
async function handleFailedPayment(paymentIntent) {
  try {
    console.log('Payment failed for:', paymentIntent.customer);
    // Aquí puedes enviar un email de seguimiento o notificación
  } catch (error) {
    console.error('Error handling failed payment:', error);
  }
}

// Función para enviar email con el producto
async function sendProductEmail(email, name, session) {
  // Implementar con tu servicio de email preferido
  console.log(`Sending product to ${email} for ${name}`);
  
  // Ejemplo con fetch a otro endpoint
  try {
    await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/send-product-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name,
        sessionId: session.id,
        metadata: session.metadata
      })
    });
  } catch (error) {
    console.error('Error sending product email:', error);
  }
}

// Función para guardar orden en base de datos
async function saveOrderToDatabase(session) {
  // Implementar con tu base de datos preferida
  console.log('Saving order to database:', session.id);
  
  const orderData = {
    stripe_session_id: session.id,
    customer_email: session.customer_details?.email,
    customer_name: session.customer_details?.name,
    amount_paid: session.amount_total / 100,
    currency: session.currency,
    payment_status: session.payment_status,
    created_at: new Date().toISOString(),
    metadata: session.metadata
  };
  
  // Aquí guardarías en tu base de datos
  console.log('Order data:', orderData);
};
