import { useState, useEffect } from 'react';

export const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Solo activar si el mouse sale por la parte superior de la ventana
      if (e.clientY <= 0 && !hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Detectar Ctrl+W o Cmd+W (cerrar pestaña)
      if ((e.ctrlKey || e.metaKey) && e.key === 'w' && !hasShown) {
        e.preventDefault();
        setShowExitIntent(true);
        setHasShown(true);
      }
    };

    // Detectar cuando el usuario ha estado en la página por al menos 30 segundos
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('keydown', handleKeyDown);
    }, 120000); // 2 minutos

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasShown]);

  const closeExitIntent = () => {
    setShowExitIntent(false);
  };

  return { showExitIntent, closeExitIntent };
};
