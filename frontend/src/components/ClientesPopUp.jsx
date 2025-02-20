import React, { useState } from 'react';
import '../styles/ClientesPopUp.css';

const ClientesPopUp = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    Cl_Nombre: '',
    Cl_Apellido: '',
    Cl_Contacto: '',
    Cl_Nit: '',
    Cl_Documento: '',
    Cl_Cupo: '',
    Cl_Plazo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Agregar Nuevo Cliente</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="Cl_Nombre" value={formData.Cl_Nombre} onChange={handleChange} required />
          </label>
          <label>
            Apellido:
            <input type="text" name="Cl_Apellido" value={formData.Cl_Apellido} onChange={handleChange} required />
          </label>
          <label>
            Contacto:
            <input type="email" name="Cl_Contacto" value={formData.Cl_Contacto} onChange={handleChange} required />
          </label>
          <label>
            NIT:
            <input type="text" name="Cl_Nit" value={formData.Cl_Nit} onChange={handleChange} required />
          </label>
          <label>
            Documento:
            <input type="text" name="Cl_Documento" value={formData.Cl_Documento} onChange={handleChange} required />
          </label>
          <label>
            Cupo:
            <input type="number" name="Cl_Cupo" value={formData.Cl_Cupo} onChange={handleChange} required />
          </label>
          <label>
            Plazo:
            <input type="number" name="Cl_Plazo" value={formData.Cl_Plazo} onChange={handleChange} required />
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default ClientesPopUp;