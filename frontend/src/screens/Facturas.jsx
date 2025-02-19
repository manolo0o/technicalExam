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
            <th>FT_NumFactura</th>
            <th>id_Cliente</th>
            <th>FT_Fecha</th>
            <th>id_Producto</th>
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