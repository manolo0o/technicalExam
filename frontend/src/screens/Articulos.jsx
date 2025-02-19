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
            <th>Ar_tCod</th>
            <th>Art_Nom</th>
            <th>Art_Lab</th>
            <th>Art_Saldo</th>
            <th>Art_Costo</th>
            <th>Ar_tPV</th>
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