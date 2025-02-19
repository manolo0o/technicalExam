import React from 'react';
import '../styles/Lateral_menue.css';

const LateralMenu = () => {
  return (
    <div className="lateral-menu">
      <h2>Menu</h2>
      <ul>
        <li><a href="#articulos">Articulos</a></li>
        <li><a href="#clientes">Clientes</a></li>
        <li><a href="#facturas">Facturas</a></li>
      </ul>
    </div>
  );
};

export default LateralMenu;