// components/MasterLayout.tsx
import React, { useRef } from 'react';

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="min-h-screen">
      {/* Video de fondo fijo - siempre visible */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/Abstract_dark_background_202507280238_r9v6u.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay más claro */}
      </div>
      
      {/* Contenido que se desplaza por encima del video */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};

export default MasterLayout; 