const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.raw({ type: 'application/json' }));

// Importar las APIs
const createCheckoutSession = require('./api/create-checkout-session.js');
const verifySession = require('./api/verify-session.js');
const stripeWebhook = require('./api/stripe-webhook.js');
const sendProductEmail = require('./api/send-product-email.js');

// Rutas de API
app.post('/api/create-checkout-session', createCheckoutSession.default);
app.get('/api/verify-session', verifySession.default);
app.post('/api/stripe-webhook', stripeWebhook.default);
app.post('/api/send-product-email', sendProductEmail.default);

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    stripe_configured: !!process.env.STRIPE_SECRET_KEY
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor API corriendo en puerto ${PORT}`);
  console.log(`📋 Stripe configurado: ${process.env.STRIPE_SECRET_KEY ? '✅ SÍ' : '❌ NO'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});
