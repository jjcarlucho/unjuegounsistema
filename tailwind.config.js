/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'quantum-dark': '#0A0A0A', // Un negro más profundo y puro
        'quantum-gray': '#111111', // Para fondos de Card
        'quantum-text-bright': '#F5F5F5', // Un blanco ligeramente más cálido
        'quantum-text-dim': '#A3A3A3', // Gris para texto secundario
        'quantum-green-cta': '#10B981', // El verde esmeralda para acción
        'quantum-green-glow': 'rgba(16, 185, 129, 0.25)', // El aura de brillo para el verde
        'quantum-amber-accent': '#F59E0B', // El ámbar para highlights
        'quantum-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-h1': 'clamp(2.5rem, 6vw, 5rem)',
        'fluid-h2': 'clamp(2rem, 5vw, 3.5rem)',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
      },
      spacing: {
        'section': '120px',
      },
      boxShadow: {
        'quantum-card': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'quantum-cta': '0px 10px 30px -5px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
