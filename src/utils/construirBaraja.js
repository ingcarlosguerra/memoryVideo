import shuffle from 'lodash.shuffle';

const NUMERO_DE_CARTAS = 20;
const CartaImages = [
  "/video1-1.mp4", "/video1-2.mp4",
  "/video2-1.mp4", "/video2-2.mp4",
  "/video3-1.mp4", "/video3-2.mp4",
  "/video4-1.mp4", "/video4-2.mp4",
  "/video5-1.mp4", "/video5-2.mp4",
  "/video6-1.mp4", "/video6-2.mp4",
  "/video7-1.mp4", "/video7-2.mp4",
  "/video8-1.mp4", "/video8-2.mp4",
  "/video9-1.mp4", "/video9-2.mp4",
  "/video10-1.mp4", "/video10-2.mp4"
];

export default () => {
  const cartas = [];

  // Crear las cartas emparejadas según el índice de los videos
  for (let i = 0; i < NUMERO_DE_CARTAS / 2; i++) {
    const carta = {
      icono: CartaImages[i * 2],
      fueAdivinada: false
    };
    const cartaPar = {
      icono: CartaImages[i * 2 + 1],
      fueAdivinada: false
    };

    cartas.push(carta, cartaPar);
  }

  return shuffle(cartas);
};