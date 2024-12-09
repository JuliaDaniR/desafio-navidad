import React, { useState, useRef, useEffect } from "react";
import Calendario from "./components/Calendario";
import CuentaRegresiva from "./components/CuentaRegresiva";
import "./style/App.css";
import Nieve from "./components/Nieve";
import PapaNoel from "./components/Papa-noel";
import EstrellaFugaz from "./components/EstrellaFugaz";

const App = () => {
  const [audioEnabled, setAudioEnabled] = useState(false); // Control de audio principal
  const [audioPapaNoel, setAudioPapaNoel] = useState(true); // Control del sonido de Papá Noel
  const audioRef = useRef(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleSoundToggle = () => {
    if (audioEnabled) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current = new Audio("/assets/abrir-card.wav");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current
        .play()
        .catch((err) => console.error("Error al reproducir el sonido:", err));
    }
    setAudioEnabled(!audioEnabled);
  };

  // Función para pausar el sonido de Papá Noel
  const pausarPapaNoel = () => {
    setAudioPapaNoel(false);
  };

  // Función para reanudar el sonido de Papá Noel
  const reanudarPapaNoel = () => {
    setAudioPapaNoel(true);
  };

  return (
    <div className="app">
      <Nieve />
      <header className="encabezado">
        <h1>
          <span className="campanas">🔔</span>
          <span className="texto-arcoiris">Calendario de Adviento</span>
          <span className="campanas">🔔</span>
        </h1>
        <CuentaRegresiva />
        <button className="boton-sonido" onClick={handleSoundToggle}>
          <span className="icono-sonido">
            {!audioEnabled ? <span>🔊</span> : <span>🔇</span>}
          </span>
        </button>
        <EstrellaFugaz />
      </header>
      <Calendario
        pausarPapaNoel={pausarPapaNoel}
        reanudarPapaNoel={reanudarPapaNoel}
      />
      <PapaNoel audioActivo={audioPapaNoel} />
    </div>
  );
};

export default App;
