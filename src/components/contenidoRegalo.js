const contenidoRegalo = [
  {
    Dia: 1,
    Imagen: (
      <img
        src="/assets/mensaje-especial.jpg"
        alt="Mensaje especial"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: '¡Este es un mensaje especial para alegrarte el día!',
  },
  {
    Dia: 2,
    Imagen: (
      <img
        src="/assets/dibujo-creativo.jpg"
        alt="Dibujo creativo"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Un dibujo creativo para inspirarte.',
  },
  {
    Dia: 3,
    Imagen: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/39xSV4Wh--E"
        title="Canción relajante"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    Texto: 'Escucha esta canción para relajarte.',
  },  
  {
    Dia: 4,
    Imagen: (
      <a href="https://www.rayuelainfancia.com/blog/cancion-de-navidad/">
      <img
        src="/assets/libro-recomendado.jpg"
        alt="Libro recomendado"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
      </a>
    ),
    Texto: 'Te recomendamos este libro lleno de aventuras.',
  },
  {
    Dia: 5,
    Imagen: (
      <img
        src="/assets/cafe-favorito.webp"
        alt="Café favorito"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: '¡Disfruta tu café favorito, imaginariamente!',
  },
  {
    Dia: 6,
    Imagen: (
      <img
        src="/assets/afirmacion-positiva.jpg"
        alt="Afirmación positiva"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Recuerda: ¡Eres increíble y capaz de todo!',
  },
  {
    Dia: 7,
    Imagen: (
      <img
        src="/assets/estrella-brillante.jpg"
        alt="Estrella brillante"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: '¡Eres la estrella brillante en este día!',
  },
  {
    Dia: 8,
    Imagen: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/wzuob0dBn_4"
        title="El origen de los guardianes"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    Texto: 'Hoy es un buen día para ver esta película mágica.',
  },
  {
    Dia: 9,
    Imagen: (
      <iframe
      width="100%"
      height="315"
      src="https://giphy.com/embed/2jAwaN2cRM9uNdmbNp"
      title="Arcoiris"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    ),
    Texto: 'Un arcoíris de emociones para llenar tu corazón.',
  },
  {
    Dia: 10,
    Imagen: (
      <a href="https://giphy.com/gifs/minions-illumination-entertainment-9w475hDWEPVlu">
      <iframe
        width="100%"
        height="315"
        src="https://giphy.com/embed/9w475hDWEPVlu"
        title="Gift divertido"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> </a>
    ),
    Texto: '¡Una sorpresa especial para ti!',
  },
  {
    Dia: 11,
    Imagen: (
      <img
        src="/assets/consejo-dia.jpg"
        alt="Consejo del día"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Consejo del día: Haz una pausa y respira profundo.',
  },
  {
    Dia: 12,
    Imagen: (
      <img
        src="/assets/foto-inspiradora.jpg"
        alt="Foto inspiradora"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Mira esta foto y encuentra inspiración en ella.',
  },
  {
    Dia: 13,
    Imagen: (
      <img
        src="/assets/desafio-navideño.jpg"
        alt="Desafío navideño"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: '¡Completa este desafío navideño y gana una sonrisa!',
  },
  {
    Dia: 14,
    Imagen: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/pJf8f2uQY1s"
        title="Canción relajante"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    Texto: 'Tómate unos minutos para meditar y relajarte.',
  },
  {
    Dia: 15,
    Imagen: (
      <img
        src="/assets/naturaleza.jpg"
        alt="Naturaleza"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Admira la belleza de la naturaleza con esta imagen.',
  },
  {
    Dia: 16,
    Imagen: (
      <img
        src="/assets/carta-cariño.jpg"
        alt="Carta con cariño"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Una carta imaginaria llena de cariño para ti.',
  },
  {
    Dia: 17,
    Imagen: (
      <img
        src="/assets/mensaje-para-agradecer.webp"
        alt="Idea para reflexionar"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Piensa en esta idea: "La gratitud multiplica la alegría".',
  },
  {
    Dia: 18,
    Imagen: (
      <img
        src="/assets/vale-regalo.jpg"
        alt="Vale especial"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Un vale imaginario para algo especial. ¡Úsalo bien!',
  },
  {
    Dia: 19,
    Imagen: (
      <img
        src="/assets/flor-imaginaria.jpg"
        alt="Flor imaginaria"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Una flor imaginaria que nunca se marchita.',
  },
  {
    Dia: 20,
    Imagen: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/5a3bKrJr9EM"
        title="Canción relajante"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    Texto: 'Escucha esta playlist para un momento tranquilo.',
  },
   {
    Dia: 21,
    Imagen: (
      <img
        src="/assets/galleta-virtual.jpg"
        alt="Galleta virtual"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Una deliciosa galleta virtual para endulzar tu día.',
  },
  {
    Dia: 22,
    Imagen: (
      <img
        src="/assets/diamante-simbolico.jpg"
        alt="Diamante simbólico"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Un diamante simbólico para recordarte tu valor.',
  },
  {
    Dia: 23,
    Imagen: (
      <img
        src="/assets/destino-ensueno.jpg"
        alt="Destino de ensueño"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Imagina visitar este destino de ensueño.',
  },
  {
    Dia: 24,
    Imagen: (
      <img
        src="/assets/deseo-navidad.jpg"
        alt="Deseo por cumplir"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Piensa en un deseo especial y comienza a hacerlo realidad.',
  },
  {
    Dia: 25,
    Imagen: (
      <img
        src="/assets/plan-futuro.jpg"
        alt="Plan para el futuro"
        style={{ maxWidth: '100%', maxHeight: '300px' }}
      />
    ),
    Texto: 'Crea un plan para un futuro lleno de posibilidades.',
  },
];

export default contenidoRegalo;
