import React from 'react';

const Articulos = () => {
  return (
    <div className="screen">
      <header>
        <h1>Articulos</h1>
        <div className="finder">
          <input type="text" placeholder="Buscar Articulo..." />
          <button>Buscar</button>
        </div>
        <button className="add-button">Agregar Nuevo Articulo</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Laborarotio</th>
            <th>Saldo</th>
            <th>Costo</th>
            <th>Precio Venta</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Articulos;