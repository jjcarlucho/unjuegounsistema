# 🚀 Configuración Completa de Stripe

## 📋 Pasos para Configurar Stripe

### 1. Crear Cuenta en Stripe
1. Ve a [stripe.com](https://stripe.com)
2. Crea una cuenta gratuita
3. Completa la verificación de identidad

### 2. Obtener las Claves API

#### Clave Pública (Frontend)
1. Ve a Dashboard > Developers > API Keys
2. Copia la **Publishable key** (empieza con `pk_test_` o `pk_live_`)

#### Clave Secreta (Backend)
1. En la misma página, copia la **Secret key** (empieza con `sk_test_` o `sk_live_`)
2. ⚠️ **NUNCA** compartas esta clave

### 3. Configurar Variables de Entorno

#### Para Desarrollo Local (.env.local)
```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_tu_clave_publica
STRIPE_SECRET_KEY=sk_test_tu_clave_secreta
STRIPE_WEBHOOK_SECRET=whsec_tu_webhook_secret
```

#### Para Vercel
1. Ve a tu proyecto en Vercel
2. Settings > Environment Variables
3. Agrega las mismas variables

### 4. Configurar Webhook

#### En Stripe Dashboard
1. Ve a Developers > Webhooks
2. Click en "Add endpoint"
3. URL: `https://tu-dominio.vercel.app/api/stripe-webhook`
4. Eventos a escuchar:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`

#### Obtener Webhook Secret
1. Después de crear el webhook
2. Click en el endpoint creado
3. Copia el "Signing secret" (empieza con `whsec_`)

### 5. Configurar Producto en Stripe

#### Crear Producto
1. Dashboard > Products
2. Click en "Add product"
3. Nombre: "UN JUEGO. UN SISTEMA."
4. Precio: $47.00 USD
5. Currency: USD

#### Configurar Checkout
1. Dashboard > Settings > Checkout
2. Configurar:
   - Success page URL: `https://tu-dominio.vercel.app/success`
   - Cancel page URL: `https://tu-dominio.vercel.app/`

### 6. Configurar Email (Opcional)

#### Con SendGrid
1. Crea cuenta en [sendgrid.com](https://sendgrid.com)
2. Obtén API Key
3. Agrega variable: `SENDGRID_API_KEY=tu_api_key`

#### Con Resend
1. Crea cuenta en [resend.com](https://resend.com)
2. Obtén API Key
3. Agrega variable: `RESEND_API_KEY=tu_api_key`

### 7. Configurar Base de Datos (Opcional)

#### Con Supabase
1. Crea proyecto en [supabase.com](https://supabase.com)
2. Obtén DATABASE_URL
3. Agrega variable: `DATABASE_URL=tu_database_url`

### 8. Probar el Sistema

#### Modo Test
1. Usa las claves que empiecen con `pk_test_` y `sk_test_`
2. Usa tarjetas de prueba de Stripe:
   - Visa: `4242424242424242`
   - Mastercard: `5555555555554444`
   - CVC: cualquier 3 dígitos
   - Fecha: cualquier fecha futura

#### Modo Live
1. Cambia a claves que empiecen con `pk_live_` y `sk_live_`
2. Configura webhook con URL de producción
3. Usa tarjetas reales

## 🔧 Funcionalidades Implementadas

### ✅ Sistema Completo
- [x] Checkout de Stripe integrado
- [x] Webhook para procesar pagos
- [x] Email automático con producto
- [x] Página de éxito
- [x] Manejo de errores
- [x] Información de seguridad
- [x] Garantía de 30 días
- [x] Métodos de pago múltiples

### 🎨 Componentes Profesionales
- [x] Botón de pago con animaciones
- [x] Indicadores de carga
- [x] Toasts de notificación
- [x] Badges de seguridad
- [x] Información de garantía

### 🔒 Seguridad
- [x] Encriptación SSL
- [x] Verificación de webhook
- [x] Manejo seguro de errores
- [x] Validación de datos

## 🚀 Despliegue

### Vercel
```bash
# Instalar dependencias
npm install

# Construir proyecto
npm run build

# Desplegar
vercel --prod
```

### Variables de Entorno en Vercel
```bash
vercel env add VITE_STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
```

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel
2. Verifica las variables de entorno
3. Confirma que el webhook esté configurado
4. Prueba con tarjetas de test

## 🎯 Próximos Pasos

1. **Configurar dominio personalizado**
2. **Implementar analytics**
3. **Agregar más métodos de pago**
4. **Configurar notificaciones push**
5. **Implementar sistema de afiliados**
