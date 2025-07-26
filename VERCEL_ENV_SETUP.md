# 🔧 VARIABLES DE ENTORNO PARA VERCEL

## 📋 AGREGAR ESTAS VARIABLES EN VERCEL:

### **1. STRIPE CONFIGURATION**
```
Name: VITE_STRIPE_PUBLISHABLE_KEY
Value: pk_test_51QKrOhP8nKjGzQhO... (tu clave pública)
Environment: Production, Preview, Development
```

```
Name: STRIPE_SECRET_KEY  
Value: sk_test_51QKrOhP8nKjGzQhO... (tu clave secreta)
Environment: Production, Preview, Development
```

```
Name: STRIPE_WEBHOOK_SECRET
Value: whsec_... (lo configuraremos en el paso 4)
Environment: Production, Preview, Development
```

### **2. APP CONFIGURATION**
```
Name: VITE_APP_URL
Value: https://tu-dominio.vercel.app
Environment: Production, Preview, Development
```

```
Name: VERCEL_URL
Value: https://tu-dominio.vercel.app  
Environment: Production, Preview, Development
```

## 🚨 IMPORTANTE:
- Usa claves TEST primero (pk_test_, sk_test_)
- Cambia a claves LIVE cuando todo funcione
- NUNCA compartas tu SECRET KEY
- El WEBHOOK_SECRET lo obtendremos en el paso 4

## 📝 PASOS EN VERCEL:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Add New → Agrega cada variable
4. Selecciona todos los environments
5. Save
6. Redeploy el proyecto
