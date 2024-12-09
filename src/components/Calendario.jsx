import React from 'react';
import CajaDia from './CajaDia';
import contenidoRegalo from './contenidoRegalo';

const regalos = [
  '✨ Un mensaje especial ✨',
  '🌟 Un dibujo creativo 🌟',
  '🎵 Una canción relajante 🎵',
  '📖 Un libro recomendado 📖',
  '☕ Tu café favorito ☕',
  '✨ Una afirmación positiva ✨',
  '🌟 Una estrella brillante 🌟',
  '🎬 Una película para ver 🎬',
  '🌈 Un arcoíris de emociones 🌈',
  '🎁 Un regalo sorpresa 🎁',
  '📝 Un consejo para tu día 📝',
  '📸 Una foto inspiradora 📸',
  '🎮 Un juego divertido 🎮',
  '🧘‍♀️ Un momento de meditación 🧘‍♀️',
  '🏞️ Una imagen de la naturaleza 🏞️',
  '💌 Una carta con cariño 💌',
  '💡 Una idea para reflexionar 💡',
  '🛍️ Un vale para algo especial 🛍️',
  '🌻 Una flor imaginaria 🌻',
  '🎶 Una playlist relajante 🎶',
  '🍪 Una galleta virtual 🍪',
  '💎 Un diamante simbólico 💎',
  '🏖️ Un destino de ensueño 🏖️',
  '✨ Un deseo por cumplir ✨',
  '📅 Un plan para el futuro 📅',
];

const Calendario = ({ pausarPapaNoel, reanudarPapaNoel }) => {
  const dias = Array.from({ length: regalos.length }, (_, i) => i + 1);

  return (
    <div className="calendario">
      {dias.map((dia) => {
        const contenido = contenidoRegalo.find((item) => item.Dia === dia) || {};
        return (
          <CajaDia
            key={dia}
            dia={dia}
            nombreRegalo={regalos[dia - 1]}
            contenidoRegalo={contenido}
            pausarPapaNoel={pausarPapaNoel}
            reanudarPapaNoel={reanudarPapaNoel}
          />
        );
      })}
    </div>
  );
};

export default Calendario;
