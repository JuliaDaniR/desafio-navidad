import React, { useState, useEffect, useRef } from "react";
import "../style/PapaNoel.css";

const PapaNoel = () => {
  const [position, setPosition] = useState({ left: "50%", bottom: "-150px", opacity: 0 });
  const [rotation, setRotation] = useState(0);
  const [audioPermitido, setAudioPermitido] = useState(false); // Nuevo estado
  const papaNoelRef = useRef(null);
  const sonidoRef = useRef(new Audio('/assets/ho-ho-ho.mp3')); 

  const papaNoelWidth = 350;

  // Permitir audio después de la primera interacción del usuario
  const permitirAudio = () => {
    setAudioPermitido(true);
  };

  const handleClick = () => {
    if (audioPermitido) {
      sonidoRef.current.play(); 
      console.log("¡Papá Noel ha sido clickeado!");
    }
  };

  const getRandomPosition = () => {
    const screenWidth = window.innerWidth;
    const randomX = Math.random() * (screenWidth - papaNoelWidth);
    const randomRotation = Math.random() > 0.5 ? 15 : -15;
    return { left: `${randomX}px`, rotation: randomRotation };
  };

  useEffect(() => {
    document.addEventListener("click", permitirAudio, { once: true }); // Escucha la primera interacción del usuario
    return () => document.removeEventListener("click", permitirAudio);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const { left, rotation } = getRandomPosition();

      setPosition({ left, bottom: "-150px", opacity: 0 });
      setRotation(rotation);

      const simulateClick = () => {
        if (audioPermitido) {
          papaNoelRef.current?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
      };

      setTimeout(() => {
        setPosition((prev) => ({ ...prev, bottom: "50%", opacity: 1 }));
        simulateClick();
      }, 100);

      setTimeout(() => {
        setPosition((prev) => ({ ...prev, bottom: "-150px", opacity: 0 }));
      }, 4000);

    }, 8000); 

    return () => clearInterval(interval);
  }, [audioPermitido]); // Actualiza si `audioPermitido` cambia

  return (
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
  );
};

export default PapaNoel;


