import React, { useEffect, useState } from 'react';
import ArticleFormPopup from '../components/ArticlePopUp.jsx';

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setArticulos(data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:3000/articles?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setArticulos(data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch(error => console.error('Error searching articles:', error));
  };

  const handleSave = (newArticle) => {
    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticulos([...articulos, data]);
        setShowPopup(false);
      })
      .catch(error => console.error('Error saving article:', error));
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
        <button className="add-button" onClick={() => setShowPopup(true)}>Agregar Nuevo Articulo</button>
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
          {Array.isArray(articulos) && articulos.map(articulo => (
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
      {showPopup && <ArticleFormPopup onClose={() => setShowPopup(false)} onSave={handleSave} />}
    </div>
  );
};

export default Articulos;