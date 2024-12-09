import React from "react";

const Footer = () => {
  const year = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    <footer className="footer">
      <p>
        © {year} Desarrollado con ❤️ por <strong>Julia Daniela Rodriguez</strong>. 🎄 Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
