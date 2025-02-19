import React, { useEffect, useState } from 'react';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/clients')
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:3000/clients?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Error searching clients:', error));
  };

  return (
    <div className="screen">
      <header>
        <h1>Clientes</h1>
        <div className="finder">
          <input
            type="text"
            placeholder="Buscar Cliente..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
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
          {clientes.map(cliente => (
            <tr key={cliente._id}>
              <td>{cliente.Cl_Nombre}</td>
              <td>{cliente.Cl_Apellido}</td>
              <td>{cliente.Cl_Contacto}</td>
              <td>{cliente.Cl_Nit}</td>
              <td>{cliente.Cl_Documento}</td>
              <td>{cliente.Cl_Cupo}</td>
              <td>{cliente.Cl_Plazo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;