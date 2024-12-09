import React, { useEffect } from 'react';
import '../style/Nieve.css';

const Nieve = () => {
  useEffect(() => {
    const cantidadCopos = 100;
    const container = document.querySelector('.contenedor-nieve');

    if (!container) {
      console.error('El contenedor de nieve no existe');
      return;
    }

    for (let i = 0; i < cantidadCopos; i++) {
      const copo = document.createElement('div');
      copo.className = 'copo';
      copo.style.left = `${Math.random() * 100}vw`; 
      copo.style.animationDuration = `${Math.random() * 5 + 5}s`; 
      copo.style.animationDelay = `${Math.random() * 5}s`; 
      copo.style.width = copo.style.height = `${Math.random() * 5 + 2}px`; 
      container.appendChild(copo);
    }
  }, []);

  return <div className="contenedor-nieve"></div>;
};

export default Nieve;