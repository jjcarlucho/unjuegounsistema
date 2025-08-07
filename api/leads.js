// API endpoint para manejar leads del formulario de Facebook
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, source, timestamp } = req.body;

    // Validar datos requeridos
    if (!name || !email) {
      return res.status(400).json({
        error: 'Datos requeridos faltantes',
        message: 'Nombre y email son obligatorios'
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Email inválido',
        message: 'Por favor proporciona un email válido'
      });
    }

    console.log('📧 Lead recibido:', {
      name,
      email,
      phone: phone || 'No proporcionado',
      source: source || 'facebook_lead_form',
      timestamp: timestamp || new Date().toISOString()
    });

    // Aquí puedes integrar con servicios como:
    // - Mailchimp
    // - ConvertKit
    // - ActiveCampaign
    // - Tu CRM personalizado
    // - Base de datos

    // Ejemplo: Enviar a Mailchimp (descomenta y configura)
    /*
    const mailchimpResponse = await fetch(`https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name.split(' ')[0],
          LNAME: name.split(' ').slice(1).join(' ') || '',
          PHONE: phone || '',
          SOURCE: source || 'facebook_lead_form'
        }
      }),
    });
    */

    // Ejemplo: Enviar email de bienvenida (descomenta y configura)
    /*
    const emailResponse = await fetch('/api/send-welcome-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        name: name,
        subject: '¡Bienvenido al Sistema Matemático!',
        template: 'welcome-email'
      }),
    });
    */

    // Respuesta exitosa
    res.status(200).json({
      success: true,
      message: 'Lead registrado exitosamente',
      data: {
        name,
        email,
        phone: phone || null,
        source: source || 'facebook_lead_form',
        timestamp: timestamp || new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error procesando lead:', error);
    
    res.status(500).json({
      error: 'Error interno del servidor',
      message: 'Hubo un problema procesando tu solicitud. Por favor, intenta de nuevo.'
    });
  }
} 