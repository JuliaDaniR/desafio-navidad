import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Verificar si estamos en producción para eliminar StrictMode y reportWebVitals
const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  // En producción, eliminamos StrictMode y reportWebVitals
  root.render(<App />);
} else {
  // En desarrollo, mantener StrictMode
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Mantener reportWebVitals en desarrollo si lo necesitas
  reportWebVitals();
}

