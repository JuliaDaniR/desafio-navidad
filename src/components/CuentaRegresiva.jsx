import React from 'react';
import moment from 'moment';

const CuentaRegresiva = () => {
  const hoy = moment();
  const navidad = moment('2024-12-25');
  const diasFaltantes = navidad.diff(hoy, 'days');

  return (
    <div className="cuenta-regresiva">
      🎄 Faltan {diasFaltantes} días para Navidad 🎅
    </div>
  );
};

export default CuentaRegresiva;
