import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "../style/PapaNoel.css";

const PapaNoel = () => {
  const [position, setPosition] = useState({ left: "50%", bottom: "-150px", opacity: 0 });
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);  // Estado para la visibilidad de Papá Noel
  const papaNoelRef = useRef(null);
  const sonidoRef = useRef(new Audio("/assets/ho-ho-ho.mp3"));

  // El ancho de la imagen de Papá Noel es constante
  const papaNoelWidth = useMemo(() => 350, []);

  // Maneja el clic en la imagen de Papá Noel
  const handleClick = () => {
    sonidoRef.current.play();
    console.log("¡Papá Noel ha sido clickeado!");
  };

  // Función para obtener una posición aleatoria
  const getRandomPosition = useCallback(() => {
    const screenWidth = window.innerWidth;
    const randomX = Math.random() * (screenWidth - papaNoelWidth);
    const randomRotation = Math.random() > 0.5 ? 15 : -15;
    return { left: `${randomX}px`, rotation: randomRotation };
  }, [papaNoelWidth]);

  // Maneja las animaciones de movimiento de Papá Noel
  useEffect(() => {
    // Detectar el tamaño de la ventana
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsVisible(false);  // Ocultar en pantallas pequeñas
      } else {
        setIsVisible(true);  // Mostrar en pantallas grandes
      }
    };

    // Llamar a la función cuando se monta el componente
    handleResize();

    // Añadir el evento para el cambio de tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const { left, rotation } = getRandomPosition();

      // Inicia la animación (de arriba hacia abajo)
      setPosition({ left, bottom: "-150px", opacity: 0 });
      setRotation(rotation);

      // Aparece y desciende Papá Noel
      setTimeout(() => {
        setPosition((prev) => ({ ...prev, bottom: "60%", opacity: 1 }));
      }, 100);

      // Desaparece Papá Noel
      setTimeout(() => {
        setPosition((prev) => ({ ...prev, bottom: "-150px", opacity: 0 }));
      }, 4000);

    }, 8000);

    return () => clearInterval(interval);
  }, [getRandomPosition]);

  return (
    <>
      {isVisible && (
        <div className="papa-noel-container">
          <img
            ref={papaNoelRef}
            src="/assets/papa-noel2.png"
            alt="Papá Noel"
            className="papa-noel"
            onClick={handleClick}
            style={{
              left: position.left,
              bottom: position.bottom,
              opacity: position.opacity,
              transform: `rotate(${rotation}deg)`,
              transition: "all 1s ease-in-out",
            }}
          />
        </div>
      )}
    </>
  );
};

export default PapaNoel;

