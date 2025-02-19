import React from 'react';

const Clientes = () => {
  return (
    <div className="screen">
      <header>
        <h1>Clientes</h1>
        <div className="finder">
          <input type="text" placeholder="Buscar Cliente..." />
          <button>Buscar</button>
        </div>
        <button className="add-button">Agregar Nuevo Cliente</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Contacto</th>
            <th>Nit</th>
            <th>Documento</th>
            <th>Cupo</th>
            <th>Plazo</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;