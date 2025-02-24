import React, { useState } from 'react';
import '../styles/ArticlePopUp.css';

const ArticleFormPopup = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    Art_Nom: '',
    Art_Lab: '',
    Art_Saldo: '',
    Art_Costo: '',
    Art_PV: '',
    Art_Fecha_Ingreso: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(formData.Art_Costo) >= parseFloat(formData.Art_PV)) {
      setError('El precio de venta debe ser mayor al costo');
      return;
    }
    setError('');
    onSave(formData);
  };

  const handleSave = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newArticulo = await response.json();
      setArticulos([...articulos, newArticulo]);
      setShowPopup(false);
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Agregar Nuevo Articulo</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Fecha:
            <input type="date" name="Art_Fecha_Ingreso" value={formData.Art_Fecha} onChange={handleChange} required />
          </label>
          <label>
            Nombre:
            <input type="text" name="Art_Nom" value={formData.Art_Nom} onChange={handleChange} required />
          </label>
          <label>
            Laboratorio:
            <input type="text" name="Art_Lab" value={formData.Art_Lab} onChange={handleChange} required />
          </label>
          <label>
            Saldo:
            <input type="number" name="Art_Saldo" value={formData.Art_Saldo} onChange={handleChange} required />
          </label>
          <label>
            Costo:
            <input type="number" name="Art_Costo" value={formData.Art_Costo} onChange={handleChange} required />
          </label>
          <label>
            Precio de venta:
            <input type="number" name="Art_PV" value={formData.Art_PV} onChange={handleChange} required />
          </label>
          {error && <p className="error">{error}</p>}
          <button className="buttonPopUpArticle" type="submit">Guardar</button>
          <button className="buttonPopUpArticle" type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default ArticleFormPopup;