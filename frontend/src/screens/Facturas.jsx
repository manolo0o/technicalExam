import React, { useEffect, useState } from 'react';

const Facturas = () => {
  const [facturas, setFacturas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/factura')
      .then(response => response.json())
      .then(data => setFacturas(data))
      .catch(error => console.error('Error fetching invoices:', error));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:3000/factura?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => setFacturas(data))
      .catch(error => console.error('Error searching invoices:', error));
  };

  return (
    <div className="screen">
      <header>
        <h1>Facturas</h1>
        <div className="finder">
          <input
            type="text"
            placeholder="Buscar Factura..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        <button className="add-button">Agregar Nueva Factura</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Numero Factura</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Producto</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map(factura => (
            <tr key={factura._id}>
              <td>{factura._id}</td>
              <td>{factura.id_Cliente}</td>
              <td>{factura.FT_Fecha}</td>
              <td>{factura.id_Producto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Facturas;