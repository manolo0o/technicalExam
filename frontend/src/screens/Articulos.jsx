import React, { useEffect, useState } from 'react';

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/article')
      .then(response => response.json())
      .then(data => setArticulos(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:3000/article?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => setArticulos(data))
      .catch(error => console.error('Error searching articles:', error));
  };

  return (
    <div className="screen">
      <header>
        <h1>Articulos</h1>
        <div className="finder">
          <input
            type="text"
            placeholder="Buscar Articulo..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        <button className="add-button">Agregar Nuevo Articulo</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Laboratorio</th>
            <th>Saldo</th>
            <th>Costo</th>
            <th>Precio Venta</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(articulo => (
            <tr key={articulo._id}>
              <td>{articulo._id}</td>
              <td>{articulo.Art_Nom}</td>
              <td>{articulo.Art_Lab}</td>
              <td>{articulo.Art_Saldo}</td>
              <td>{articulo.Art_Costo}</td>
              <td>{articulo.Art_PV}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articulos;