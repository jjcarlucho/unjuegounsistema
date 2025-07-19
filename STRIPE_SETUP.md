# 🚀 CONFIGURACIÓN DE STRIPE - GUÍA COMPLETA

## 📋 PASOS PARA CONFIGURAR STRIPE

### **1. CREAR CUENTA EN STRIPE**
1. Ve a [stripe.com](https://stripe.com)
2. Crea tu cuenta
3. Completa la verificación de identidad
4. Activa tu cuenta para pagos en vivo

### **2. OBTENER CLAVES API**
1. Ve a **Dashboard > Developers > API keys**
2. Copia las siguientes claves:
   - **Publishable key** (pk_test_... o pk_live_...)
   - **Secret key** (sk_test_... o sk_live_...)

### **3. CONFIGURAR VARIABLES DE ENTORNO**
Crea un archivo `.env` en la raíz del proyecto:

```bash
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51QKrOhP8nKjGzQhO...
STRIPE_SECRET_KEY=sk_test_51QKrOhP8nKjGzQhO...
STRIPE_WEBHOOK_SECRET=whsec_...

# App Configuration
VITE_APP_URL=http://localhost:3000
VERCEL_URL=https://tu-dominio.vercel.app
```

### **4. CONFIGURAR WEBHOOK**
1. Ve a **Dashboard > Developers > Webhooks**
2. Clic en **"Add endpoint"**
3. URL del endpoint: `https://tu-dominio.vercel.app/api/stripe-webhook`
4. Selecciona estos eventos:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copia el **Webhook secret** (whsec_...)

### **5. CONFIGURAR PRODUCTO EN STRIPE**
1. Ve a **Dashboard > Products**
2. Clic en **"Add product"**
3. Configura:
   - **Nombre:** UN JUEGO. UN SISTEMA.
   - **Descripción:** Sistema matemático completo + bonos
   - **Precio:** $17.00 USD
   - **Tipo:** One-time payment

### **6. DESPLEGAR EN VERCEL**
1. Conecta tu repositorio a Vercel
2. Agrega las variables de entorno en Vercel:
   - Ve a **Project Settings > Environment Variables**
   - Agrega todas las variables del archivo `.env`
3. Redeploy el proyecto

## 🔧 CONFIGURACIÓN AVANZADA

### **EMAILS AUTOMÁTICOS**
Para enviar emails automáticos después del pago, puedes usar:

1. **Resend** (recomendado)
2. **SendGrid**
3. **Mailgun**

### **BASE DE DATOS (OPCIONAL)**
Para guardar órdenes, puedes usar:

1. **Supabase** (gratis)
2. **PlanetScale**
3. **MongoDB Atlas**

## 🧪 TESTING

### **TARJETAS DE PRUEBA**
Usa estas tarjetas para probar:

- **Visa:** 4242 4242 4242 4242
- **Visa (declined):** 4000 0000 0000 0002
- **Mastercard:** 5555 5555 5555 4444
- **American Express:** 3782 822463 10005

**Fecha:** Cualquier fecha futura
**CVC:** Cualquier 3 dígitos
**ZIP:** Cualquier código postal

## 🚨 IMPORTANTE

### **ANTES DE IR A PRODUCCIÓN:**
1. ✅ Cambia a claves LIVE de Stripe
2. ✅ Configura webhook en producción
3. ✅ Prueba todo el flujo completo
4. ✅ Configura emails automáticos
5. ✅ Verifica que los archivos se entreguen correctamente

### **SEGURIDAD:**
- ❌ NUNCA expongas tu SECRET KEY en el frontend
- ✅ Siempre valida pagos en el backend
- ✅ Usa HTTPS en producción
- ✅ Configura webhooks correctamente

## 📊 MONITOREO

### **DASHBOARD DE STRIPE:**
- Ve todas las transacciones en tiempo real
- Analiza métricas de conversión
- Gestiona reembolsos
- Ve intentos de pago fallidos

### **WEBHOOKS:**
- Monitorea que los webhooks se ejecuten correctamente
- Revisa logs en caso de errores
- Configura reintentos automáticos

## 🆘 SOPORTE

Si tienes problemas:
1. Revisa los logs de Vercel
2. Verifica las variables de entorno
3. Prueba con tarjetas de test
4. Contacta soporte de Stripe si es necesario

## 💰 COSTOS

**Stripe cobra:**
- 2.9% + $0.30 por transacción exitosa
- Sin costos mensuales
- Sin costos de configuración

**Para una venta de $17:**
- Comisión Stripe: $0.79
- Tu ganancia: $16.21
- **VS Hotmart (10%): $15.30**
- **AHORRO: $0.91 por venta**
