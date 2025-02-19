import React from 'react';

const Facturas = () => {
  return (
    <div className="screen">
      <header>
        <h1>Facturas</h1>
        <div className="finder">
          <input type="text" placeholder="Buscar Factura..." />
          <button>Buscar</button>
        </div>
        <button className="add-button">Agregar Nueva Factura</button>
      </header>
      <table>
        <thead>
          <tr>
            <th># Factura</th>
            <th>Cliente id</th>
            <th>Fecha</th>
            <th>Producto id</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Facturas;