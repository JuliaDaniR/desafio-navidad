import React, { useState, useEffect, useRef } from "react";
import "../style/PapaNoel.css";

const PapaNoel = () => {
  const [position, setPosition] = useState({ left: "50%", bottom: "-150px", opacity: 0 });
  const [rotation, setRotation] = useState(0);
  const papaNoelRef = useRef(null);
  const sonidoRef = useRef(new Audio("/assets/ho-ho-ho.mp3"));

  const papaNoelWidth = 350;

  const handleClick = () => {
    sonidoRef.current.play();
    console.log("¡Papá Noel ha sido clickeado!");
  };

  const getRandomPosition = () => {
    const screenWidth = window.innerWidth;
    const randomX = Math.random() * (screenWidth - papaNoelWidth);
    const randomRotation = Math.random() > 0.5 ? 15 : -15;
    return { left: `${randomX}px`, rotation: randomRotation };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const { left, rotation } = getRandomPosition();

      setPosition({ left, bottom: "-150px", opacity: 0 });
      setRotation(rotation);

      setTimeout(() => {
        setPosition((prev) => ({ ...prev, bottom: "60%", opacity: 1 }));
      }, 100);

      setTimeout(() => {
        setPosition((prev) => ({ ...prev, bottom: "-150px", opacity: 0 }));
      }, 4000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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
