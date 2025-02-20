import React, { useEffect, useState } from 'react';
import '../styles/FacturaPopUp.css';

const FacturaPopup = ({ onClose, onSave }) => {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    FT_Fecha: '',
    id_Cliente: '',
    id_Producto: '',
    cant_Producto: '',
    precio_Unitario: '',
    totalProd: '',
    total: ''
  });

  useEffect(() => {
    // Fetch clientes and productos
    fetch('http://localhost:3000/clients')
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Error fetching clients:', error));

    fetch('http://localhost:3000/article')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'id_Producto') {
      const selectedProduct = productos.find(product => product._id === value);
      if (selectedProduct) {
        setFormData({
          ...formData,
          id_Producto: value,
          precio_Unitario: selectedProduct.Art_PV,
          totalProd: selectedProduct.Art_PV * formData.cant_Producto
        });
      }
    }

    if (name === 'cant_Producto') {
      const selectedProduct = productos.find(product => product._id === formData.id_Producto);
      if (selectedProduct) {
        const totalProd = selectedProduct.Art_PV * value;
        setFormData({
          ...formData,
          cant_Producto: value,
          totalProd: totalProd,
          total: totalProd // Assuming only one product for simplicity
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Agregar Nueva Factura</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Fecha:
            <input type="date" name="FT_Fecha" value={formData.FT_Fecha} onChange={handleChange} required />
          </label>
          <label>
            Cliente:
            <select name="id_Cliente" value={formData.id_Cliente} onChange={handleChange} required>
              <option value="">Seleccione un cliente</option>
              {clientes.map(cliente => (
                <option key={cliente._id} value={cliente._id}>
                  {cliente.Cl_Nombre} {cliente.Cl_Apellido} - {cliente.Cl_Nit}
                </option>
              ))}
            </select>
          </label>
          <label>
            Producto:
            <select name="id_Producto" value={formData.id_Producto} onChange={handleChange} required>
              <option value="">Seleccione un producto</option>
              {productos.map(producto => (
                <option key={producto._id} value={producto._id}>
                  {producto.Art_Nom} - Saldo: {producto.Art_Saldo}
                </option>
              ))}
            </select>
          </label>
          <label>
            Cantidad:
            <input type="number" name="cant_Producto" value={formData.cant_Producto} onChange={handleChange} required />
          </label>
          <label>
            Precio Unitario:
            <input type="number" name="precio_Unitario" value={formData.precio_Unitario} readOnly />
          </label>
          <label>
            Total Producto:
            <input type="number" name="totalProd" value={formData.totalProd} readOnly />
          </label>
          <label>
            Total:
            <input type="number" name="total" value={formData.total} readOnly />
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default FacturaPopup;