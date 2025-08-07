// Hook para manejar eventos del Meta Pixel
export const useMetaPixel = () => {
  // Verificar si fbq está disponible
  const isFbqAvailable = () => {
    return typeof window !== 'undefined' && (window as any).fbq;
  };

  // Evento de inicio de checkout
  const trackInitiateCheckout = (value?: number, currency?: string) => {
    if (isFbqAvailable()) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Sistema Matemático Premium',
        content_category: 'ebook',
        value: value || 17.00,
        currency: currency || 'USD',
        content_type: 'product'
      });
    }
  };

  // Evento de compra exitosa
  const trackPurchase = (value?: number, currency?: string, orderId?: string) => {
    if (isFbqAvailable()) {
      (window as any).fbq('track', 'Purchase', {
        content_name: 'Sistema Matemático Premium',
        content_category: 'ebook',
        value: value || 17.00,
        currency: currency || 'USD',
        content_type: 'product',
        order_id: orderId
      });
    }
  };

  // Evento de agregar al carrito (para botones de compra)
  const trackAddToCart = (value?: number, currency?: string) => {
    if (isFbqAvailable()) {
      (window as any).fbq('track', 'AddToCart', {
        content_name: 'Sistema Matemático Premium',
        content_category: 'ebook',
        value: value || 17.00,
        currency: currency || 'USD',
        content_type: 'product'
      });
    }
  };

  // Evento de vista de contenido
  const trackViewContent = (contentName?: string) => {
    if (isFbqAvailable()) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: contentName || 'Sistema Matemático Premium',
        content_category: 'ebook',
        content_type: 'product'
      });
    }
  };

  // Evento de lead (para capturas de email)
  const trackLead = (value?: number, currency?: string) => {
    if (isFbqAvailable()) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Sistema Matemático Premium',
        content_category: 'ebook',
        value: value || 17.00,
        currency: currency || 'USD',
        content_type: 'product'
      });
    }
  };

  // Evento personalizado para clics en botones de compra
  const trackButtonClick = (buttonLocation: string) => {
    if (isFbqAvailable()) {
      (window as any).fbq('track', 'CustomEvent', {
        event_name: 'button_click',
        button_location: buttonLocation,
        content_name: 'Sistema Matemático Premium',
        content_category: 'ebook'
      });
    }
  };

  return {
    trackInitiateCheckout,
    trackPurchase,
    trackAddToCart,
    trackViewContent,
    trackLead,
    trackButtonClick,
    isFbqAvailable
  };
}; 