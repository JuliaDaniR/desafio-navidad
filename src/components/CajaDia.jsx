import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
import '../style/CajaDia.css';
import CardSorpresa from './CardSorpresa';

const CajaDia = ({ dia, nombreRegalo, contenidoRegalo, pausarPapaNoel, reanudarPapaNoel }) => {
  const [abierta, setAbierta] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrandoAnimacion, setMostrandoAnimacion] = useState(false);
  const [mostrarCartel, setMostrarCartel] = useState(false);

  // Calcular el día de hoy solo una vez
  const hoy = useMemo(() => moment().date(), []);

  // Referencia para el sonido
  const sonidoAnimacionRef = useRef(new Audio("/assets/abrir-caja.wav"));

  // Maneja el clic en la caja (uso de useCallback para evitar recrear la función)
  const manejarClick = useCallback(() => {
    if (dia <= hoy) {
      setAbierta(true);
      setMostrandoAnimacion(true);

      // Pausar el sonido de Papá Noel
      pausarPapaNoel();

      // Reproducir el sonido de la animación
      sonidoAnimacionRef.current.play();

      const animationTimeout = setTimeout(() => {
        setMostrandoAnimacion(false);
        setMostrarModal(true);
      }, 7000);

      // Limpiar el timeout cuando el componente se desmonte o se cambien las dependencias
      return () => clearTimeout(animationTimeout);
    } else {
      setMostrarCartel(true);
      const cartelTimeout = setTimeout(() => setMostrarCartel(false), 4000);
      return () => clearTimeout(cartelTimeout);
    }
  }, [dia, hoy, pausarPapaNoel]);

  // Cierra el modal y reanuda el sonido de Papá Noel
  const cerrarModal = useCallback(() => {
    setMostrarModal(false);
    reanudarPapaNoel();
  }, [reanudarPapaNoel]);

  // Limpiar el audio al desmontar el componente
  useEffect(() => {
    const sonidoAnimacion = sonidoAnimacionRef.current;
  
    return () => {
      // Limpiar el audio de la ref usando la variable
      if (sonidoAnimacion) {
        sonidoAnimacion.pause();
        sonidoAnimacion.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      {/* Caja interactiva */}
      <motion.div
        className={`caja-dia ${abierta ? "abierta" : ""}`}
        onClick={manejarClick}
        whileHover={{ scale: 1.1 }}
      >
        {abierta ? (
          <div className="contenido">🎁 Sorpresa del día {dia}</div>
        ) : (
          <span className="numero">{dia}</span>
        )}
      </motion.div>

      {/* Animación al abrir la caja */}
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

      {/* Modal con el regalo */}
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

      {/* Cartel de caja no disponible */}
      {mostrarCartel && (
        <div className="cartel-no-abierto">
          <p>¡Todavía no puedes abrir esta caja!</p>
        </div>
      )}
    </>
  );
};

export default CajaDia;

