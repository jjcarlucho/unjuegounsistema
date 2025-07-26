import React, { useEffect, useState } from 'react';

const getDeadline = () => {
  const saved = localStorage.getItem('premium-countdown-deadline');
  if (saved) return new Date(saved);
  const deadline = new Date(Date.now() + 48 * 60 * 60 * 1000); // 48 horas
  localStorage.setItem('premium-countdown-deadline', deadline.toISOString());
  return deadline;
};

const pad = (n: number) => n.toString().padStart(2, '0');

const Countdown = () => {
  const [time, setTime] = useState<{h: string, m: string, s: string}>({h: '00', m: '00', s: '00'});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();
      if (diff <= 0) {
        setExpired(true);
        return;
      }
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTime({ h: pad(h), m: pad(m), s: pad(s) });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="premium-glass flex flex-col items-center justify-center p-6 rounded-2xl border border-yellow-500/20 shadow-xl max-w-xs mx-auto mt-12 animate-pulse">
      <div className="text-yellow-400 text-lg font-bold mb-2 tracking-wide">PREVENTA FINALIZA EN</div>
      {expired ? (
        <div className="text-red-400 text-2xl font-bold">¡Preventa cerrada!</div>
      ) : (
        <div className="flex gap-2 text-3xl font-mono text-yellow-200">
          <span>{time.h}</span>
          <span>:</span>
          <span>{time.m}</span>
          <span>:</span>
          <span>{time.s}</span>
        </div>
      )}
      <div className="text-yellow-400 text-xs mt-2 font-semibold">Acceso anticipado solo para los primeros. No garantizado para todos.</div>
    </div>
  );
};

export default Countdown; 