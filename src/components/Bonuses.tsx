import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const bonuses = [
  {
    name: 'Su Deseo Es Su Mandato',
    price: 500,
    img: '', // Espacio para imagen
    description: `Acceso exclusivo al legendario entrenamiento “Your Wish Is Your Command”. Descubre el secreto mejor guardado de la élite mundial para manifestar deseos, riqueza y éxito. Este audio-seminario, grabado en un retiro privado en los Alpes suizos, revela cómo activar la frecuencia cerebral THETA (“la onda de los millonarios”) para atraer dinero, salud, amor y poder simplemente con tus pensamientos. Técnicas nunca antes reveladas, validadas por la neurociencia, para convertirte en un imán de oportunidades y resultados. Miles de personas en más de 100 países ya han transformado su vida con este método. Valor real: $500 USD, incluido GRATIS por tiempo limitado.`,
    ref: 'https://www.yourwishoffer.com/?aff=67847ad36c334aff9189da90aa84baf7b9a1d32b86599ecad2e465c14cffbcdf',
  },
  {
    name: 'Tapping',
    price: 297,
    img: '', // Espacio para imagen
    description: `El método Tapping (TFT/EFT): Libera tu potencial y elimina bloqueos en minutos. Accede a la técnica de liberación emocional y reprogramación mental utilizada por atletas de élite, empresarios y terapeutas de todo el mundo. El Tapping combina acupresión y psicología energética para ayudarte a superar miedos, estrés, ansiedad, creencias limitantes y traumas… en minutos. Incluye guía práctica y audios exclusivos para aplicar el método desde el primer día. Valor real: $297 USD, pero lo recibes GRATIS junto al método principal.`,
    ref: 'https://tfttapping.com/',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Bonuses = () => (
  <section className="py-28 bg-transparent relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Bonos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">solo para preventa</span>
        </h2>
        <p className="text-xl text-yellow-400 max-w-2xl mx-auto font-semibold">
          Estos bonos premium solo estarán disponibles para quienes reserven su acceso durante la preventa. Una vez revelado el sistema, nunca más volverán a ofrecerse.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >
        {bonuses.map((b, i) => {
          const audioRef = useRef<HTMLAudioElement | null>(null);
          const playSound = () => {
            if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              audioRef.current?.currentTime && (audioRef.current.currentTime = 0);
              audioRef.current?.play();
            }
          };
          return (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px #D4AF37aa' }}
              transition={{ type: 'spring', stiffness: 320 }}
              className="premium-glass flex flex-col items-center text-center p-10 rounded-2xl border border-yellow-500/10 shadow-xl cursor-pointer group"
              onMouseEnter={playSound}
              onClick={playSound}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                {/* Imagen del bono (placeholder) */}
                {b.img ? (
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-yellow-400 text-4xl font-bold">🎁</span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 font-serif mb-2 drop-shadow">
                {b.name}
              </h3>
              <div className="text-lg text-gray-300 mb-4">{b.description}</div>
              <a href={b.ref} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline text-sm mb-2 inline-block">Ver más</a>
              <div className="text-yellow-200 text-xl font-bold mb-2">
                Valor: <span className="text-2xl text-yellow-400 font-extrabold">${b.price}</span> USD
              </div>
              <div className="text-green-400 font-bold text-lg">Incluido GRATIS</div>
              <audio ref={audioRef} src="/ui-tap.mp3" preload="auto" style={{ display: 'none' }} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Bonuses; 