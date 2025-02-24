import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Lateral_menue.css';

const LateralMenu = () => {
  return (
    <div className="lateral-menu">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/articulos">Articulos</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/facturas">Facturas</Link></li>
        <li><Link to="/kardex">Kardex</Link></li>
      </ul>
    </div>
  );
};

export default LateralMenu;