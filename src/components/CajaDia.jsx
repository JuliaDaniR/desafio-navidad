import React, { useState, useRef } from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
import '../style/CajaDia.css';
import CardSorpresa from './CardSorpresa';

const CajaDia = ({ dia, nombreRegalo, contenidoRegalo, pausarPapaNoel, reanudarPapaNoel }) => {
  const [abierta, setAbierta] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrandoAnimacion, setMostrandoAnimacion] = useState(false);
  const [mostrarCartel, setMostrarCartel] = useState(false); 
  const hoy = moment().date();

  const sonidoAnimacionRef = useRef(new Audio('/assets/abrir-caja.wav')); 

  const manejarClick = () => {
    if (dia <= hoy) {
      setAbierta(true);
      setMostrandoAnimacion(true);

      // Pausar el sonido de Papá Noel
      pausarPapaNoel();

      // Reproducir el sonido de la animación
      sonidoAnimacionRef.current.play();

      setTimeout(() => {
        setMostrandoAnimacion(false);
        setMostrarModal(true);
      }, 7000); 
    } else {
      
      setMostrarCartel(true);
      setTimeout(() => setMostrarCartel(false), 6000); 
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);

    // Reanudar el sonido de Papá Noel
    reanudarPapaNoel();
  };

  return (
    <>
      <motion.div
        className={`caja-dia ${abierta ? 'abierta' : ''}`}
        onClick={manejarClick}
        whileHover={{ scale: 1.1 }}
      >
        {abierta ? (
          <div className="contenido">🎁 Sorpresa del día {dia}</div>
        ) : (
          <span className="numero">{dia}</span>
        )}
      </motion.div>

      {mostrandoAnimacion && (
        <motion.div
          className="animacion-caja"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5 }}
        >
          <img
            src="/assets/caja-regalo.png"
            alt="Caja entreabierta"
            className="imagen-caja"
          />
        </motion.div>
      )}

      {mostrarModal && (
        <CardSorpresa onClose={cerrarModal}>
          <h2 className="card-sorpresa-h2">🎁 Regalo del Día {dia}</h2>
          <p className="card-sorpresa-p">{nombreRegalo}</p>
          <div>
            {contenidoRegalo?.Imagen}
            {contenidoRegalo?.Texto && (
              <p className="contenido-regalo-p">{contenidoRegalo.Texto}</p>
            )}
          </div>
        </CardSorpresa>
      )}

      {mostrarCartel && (
        <div className="cartel-no-abierto">
          <p>¡Todavía no puedes abrir esta caja!</p>
        </div>
      )}
    </>
  );
};

export default CajaDia;
