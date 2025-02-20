import React, { useEffect, useState } from 'react';
import ClientesPopUp from '../components/ClientesPopUp.jsx';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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

  const handleSave = (newClient) => {
    fetch('http://localhost:3000/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newClient)
    })
      .then(response => response.json())
      .then(data => {
        setClientes([...clientes, data]);
        setShowPopup(false);
      })
      .catch(error => console.error('Error saving client:', error));
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
        <button className="add-button" onClick={() => setShowPopup(true)}>Agregar Nuevo Cliente</button>
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
      {showPopup && <ClientesPopUp onClose={() => setShowPopup(false)} onSave={handleSave} />}
    </div>
  );
};

export default Clientes;