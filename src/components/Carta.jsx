// Carta.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactCardFlip from 'react-card-flip';

const Carta = ({ index, seleccionarCarta, cartaCerrada, estaSiendoComparada, fueAdivinada, icono }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef(null);
  const fullScreenVideoRef = useRef(null);

  const handleFullScreen = useCallback(() => {
    setIsFullScreen(true);
  }, [setIsFullScreen]);

  const handleCerrarFullScreen = useCallback((e) => {
    e.stopPropagation(); 
    setIsFullScreen(false);
  }, [setIsFullScreen]);

  useEffect(() => {
    if (isFullScreen && fullScreenVideoRef.current) {
      fullScreenVideoRef.current.play();
    } else if (!isFullScreen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isFullScreen, fullScreenVideoRef, videoRef]);

  useEffect(() => {
    if (fueAdivinada) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (fullScreenVideoRef.current) {
        fullScreenVideoRef.current.pause();
      }
    }
  }, [fueAdivinada, videoRef, fullScreenVideoRef]);

  return (
    <div className="carta" onClick={(e) => {
      seleccionarCarta(index);
      handleFullScreen();
    }} >
      <ReactCardFlip isFlipped={estaSiendoComparada || fueAdivinada} flipDirection="vertical">
        <div className={`portada ${estaSiendoComparada || fueAdivinada ? 'oculto' : ''}`}></div>
        <div className={`contenido ${estaSiendoComparada || fueAdivinada ? 'visible' : ''}`}>
          {!isFullScreen && (
            <video 
              className='card_video' 
              src={icono} 
              alt='...' 
              muted 
              ref={videoRef}
            />
          )}
        </div>
      </ReactCardFlip>
      {isFullScreen && (
        <div className="full-screen-video">
          <video 
            className='full-screen-video-player' 
            src={icono} 
            alt='...' 
            muted 
            ref={fullScreenVideoRef}
          />
          <button className="cerrar-full-screen" onClick={(e) => handleCerrarFullScreen(e)}>Cerrar</button>
        </div>
      )}
      {isFullScreen && (
        <div className="backdrop" onClick={(e) => handleCerrarFullScreen(e)} />
      )}
    </div>
  );
};

export default Carta;