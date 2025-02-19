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
            <th>Cl_Nombre</th>
            <th>Cl_Apellido</th>
            <th>Cl_Contacto</th>
            <th>Cl_Nit</th>
            <th>Cl_Documento</th>
            <th>Cl_Cupo</th>
            <th>Cl_Plazo</th>
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