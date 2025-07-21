// Sistema de emails automáticos post-compra
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { email, name, sessionId, metadata } = req.body;

    console.log('📧 Enviando producto por email:', {
      email,
      name: name || 'Cliente',
      sessionId
    });

    // Aquí puedes integrar con tu servicio de email preferido:
    // - Resend (recomendado)
    // - SendGrid
    // - Mailgun
    // - Nodemailer

    // EJEMPLO CON RESEND (descomenta cuando tengas API key):
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailResult = await resend.emails.send({
      from: 'noreply@tudominio.com',
      to: email,
      subject: '🎉 ¡Tu compra fue exitosa! - UN JUEGO. UN SISTEMA.',
      html: generateProductEmail(name || 'Cliente', sessionId)
    });
    */

    // Por ahora, simulamos el envío exitoso
    console.log('✅ Email enviado exitosamente (simulado)');
    
    // Aquí también podrías:
    // 1. Guardar la orden en base de datos
    // 2. Generar enlaces de descarga únicos
    // 3. Activar acceso a área de miembros
    // 4. Enviar notificación a Slack/Discord

    res.status(200).json({ 
      success: true,
      message: 'Producto enviado por email',
      email,
      sessionId
    });

  } catch (error) {
    console.error('❌ Error enviando producto:', error);
    res.status(500).json({ 
      error: 'Error enviando producto',
      message: error.message 
    });
  }
}

// Función para generar el HTML del email
function generateProductEmail(customerName, sessionId) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>¡Tu compra fue exitosa!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .download-section { background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .download-button { display: inline-block; background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 ¡Compra Exitosa!</h1>
          <p>Hola ${customerName}, ¡gracias por tu compra!</p>
        </div>
        
        <div class="content">
          <h2>📦 Lo que acabas de adquirir:</h2>
          
          <div class="download-section">
            <h3>📖 Sistema Matemático Principal</h3>
            <p>El método completo explicado paso a paso</p>
            <a href="#" class="download-button">📥 DESCARGAR SISTEMA</a>
          </div>
          
          <div class="download-section">
            <h3>🎁 Bono 1: Su Deseo Es Su Mandato</h3>
            <p>Entrenamiento exclusivo de manifestación (Valor: $500 USD)</p>
            <a href="#" class="download-button">📥 DESCARGAR BONO 1</a>
          </div>
          
          <div class="download-section">
            <h3>🎁 Bono 2: Tapping (TFT)</h3>
            <p>Técnica de liberación emocional (Valor: $297 USD)</p>
            <a href="#" class="download-button">📥 DESCARGAR BONO 2</a>
          </div>
          
          <h3>🚀 Próximos pasos:</h3>
          <ol>
            <li>Descarga todos los archivos usando los botones de arriba</li>
            <li>Lee primero el sistema matemático principal</li>
            <li>Aplica el método paso a paso</li>
            <li>Disfruta de los bonos incluidos</li>
            <li>¡Empieza a ver resultados!</li>
          </ol>
          
          <h3>🤝 ¿Necesitas ayuda?</h3>
          <p>Estamos aquí para ayudarte:</p>
          <p>📧 Email: soporte@tudominio.com</p>
          <p>💬 WhatsApp: <a href="https://wa.me/+17862623985">+1 786 262 3985</a></p>
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>⚠️ Importante:</strong> Guarda este email. Contiene todos tus enlaces de descarga.
          </div>
        </div>
        
        <div class="footer">
          <p>Orden #${sessionId?.slice(-8).toUpperCase()}</p>
          <p>© 2025 UN JUEGO. UN SISTEMA. - Todos los derechos reservados</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
