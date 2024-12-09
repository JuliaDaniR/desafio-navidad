import React, { useState, useRef, useEffect, useCallback, Suspense, lazy } from "react";
import "./style/App.css";

// Lazy load de los componentes
const Calendario = lazy(() => import("./components/Calendario"));
const CuentaRegresiva = lazy(() => import("./components/CuentaRegresiva"));
const Nieve = lazy(() => import("./components/Nieve"));
const PapaNoel = lazy(() => import("./components/Papa-noel"));
const EstrellaFugaz = lazy(() => import("./components/EstrellaFugaz"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioPapaNoel, setAudioPapaNoel] = useState(true);
  const audioRef = useRef(null);

  // Pre-cargar el audio solo una vez
  useEffect(() => {
    const audio = new Audio("/assets/abrir-card.wav");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  const handleSoundToggle = useCallback(() => {
    if (audioEnabled) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current
        .play()
        .catch((err) => console.error("Error al reproducir el sonido:", err));
    }
    setAudioEnabled(!audioEnabled);
  }, [audioEnabled]); // Solo se recrea si cambia audioEnabled

  const pausarPapaNoel = useCallback(() => {
    setAudioPapaNoel(false);
  }, []);

  const reanudarPapaNoel = useCallback(() => {
    setAudioPapaNoel(true);
  }, []);

  return (
    <div className="app">
      <Suspense fallback={<div>Cargando...</div>}>
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
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

