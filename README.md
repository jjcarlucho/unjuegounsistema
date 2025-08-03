# UN JUEGO. UN SISTEMA.

Una landing page moderna y profesional para el sistema matemático de Baccarat, construida con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Moderno:** Interfaz elegante y responsiva
- **Sistema de Pagos:** Integración completa con Stripe
- **Elementos de Preventa:** Contadores, urgencia y cupos limitados
- **Optimización SEO:** Meta tags y estructura semántica
- **Animaciones:** Transiciones suaves con Framer Motion
- **Seguridad:** SSL y certificaciones Stripe

## 🛠️ Tecnologías

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Pagos:** Stripe Checkout
- **Deploy:** Vercel

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jjcarlucho/unjuegounsistema.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus claves de Stripe

# Ejecutar en desarrollo
npm run dev
```

## 🔧 Configuración

### Variables de Entorno

```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_tu_clave_publica
STRIPE_SECRET_KEY=sk_test_tu_clave_secreta
STRIPE_WEBHOOK_SECRET=whsec_tu_webhook_secret
```

### Stripe Setup

1. Crear cuenta en [stripe.com](https://stripe.com)
2. Obtener claves API desde el dashboard
3. Configurar webhook para procesar pagos
4. Crear enlace de pago en Stripe

## 🎯 Funcionalidades

- ✅ Landing page completa
- ✅ Sistema de pagos con Stripe
- ✅ Elementos de preventa
- ✅ Testimonios dinámicos
- ✅ Información de seguridad
- ✅ Garantía de 30 días
- ✅ Responsive design

## 📱 Páginas

- **Home:** Landing principal con toda la información
- **Success:** Página de éxito después del pago
- **Cancel:** Página de cancelación

## 🚀 Deploy

El proyecto está configurado para deploy automático en Vercel:

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, contacta a través de GitHub Issues.
