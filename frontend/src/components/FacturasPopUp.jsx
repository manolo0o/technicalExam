import React, { useEffect, useState } from 'react';
import '../styles/FacturaPopUp.css';

const FacturaPopup = ({ onClose, onSave }) => {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    FT_Fecha: '',
    id_Cliente: '',
    productos: [],
    total: 0
  });
  const [currentProduct, setCurrentProduct] = useState({
    id_Producto: '',
    cant_Producto: '',
    precio_Unitario: '',
    totalProd: ''
  });
  const [error, setError] = useState('');

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
    setCurrentProduct({ ...currentProduct, [name]: value });

    if (name === 'id_Producto') {
      const selectedProduct = productos.find(product => product._id === value);
      if (selectedProduct) {
        setCurrentProduct({
          ...currentProduct,
          id_Producto: value,
          precio_Unitario: selectedProduct.Art_PV,
          totalProd: selectedProduct.Art_PV * currentProduct.cant_Producto
        });
      }
    }

    if (name === 'cant_Producto') {
      const selectedProduct = productos.find(product => product._id === currentProduct.id_Producto);
      if (selectedProduct) {
        if (value > selectedProduct.Art_Saldo) {
          setError(`La cantidad no puede ser mayor que el saldo disponible (${selectedProduct.Art_Saldo})`);
        } else {
          setError('');
          const totalProd = selectedProduct.Art_PV * value;
          setCurrentProduct({
            ...currentProduct,
            cant_Producto: value,
            totalProd: totalProd
          });
        }
      }
    }
  };

  const addProduct = () => {
    if (error) {
      alert(error);
      return;
    }
    const newTotal = formData.productos.reduce((acc, prod) => acc + prod.totalProd, 0) + currentProduct.totalProd;
    setFormData({
      ...formData,
      productos: [...formData.productos, currentProduct],
      total: newTotal
    });
    setCurrentProduct({
      id_Producto: '',
      cant_Producto: '',
      precio_Unitario: '',
      totalProd: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      alert(error);
      return;
    }
    console.log('Datos enviados:', formData);
    onSave(formData);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Agregar Nueva Factura</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Fecha:
            <input type="date" name="FT_Fecha" value={formData.FT_Fecha} onChange={(e) => setFormData({ ...formData, FT_Fecha: e.target.value })} required />
          </label>
          <label>
            Cliente:
            <select name="id_Cliente" value={formData.id_Cliente} onChange={(e) => setFormData({ ...formData, id_Cliente: e.target.value })} required>
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
            <select name="id_Producto" value={currentProduct.id_Producto} onChange={handleChange} required={!formData.productos.length}>
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
            <input type="number" name="cant_Producto" value={currentProduct.cant_Producto} onChange={handleChange} required={!formData.productos.length} />
          </label>
          <label>
            Precio Unitario:
            <input type="number" name="precio_Unitario" value={currentProduct.precio_Unitario} readOnly />
          </label>
          <label>
            Total Producto:
            <input type="number" name="totalProd" value={currentProduct.totalProd} readOnly />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="button" onClick={addProduct}>Agregar Producto</button>
          <h3>Productos Agregados:</h3>
          <ul>
            {formData.productos.map((prod, index) => (
              <li key={index}>{prod.id_Producto} - Cantidad: {prod.cant_Producto} - Total: {prod.totalProd}</li>
            ))}
          </ul>
          <label>
            Total:
            <input type="number" name="total" value={formData.total} readOnly />
          </label>
          <button className='popUpButtonFactura' type="submit">Guardar</button>
          <button className='popUpButtonFactura' type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default FacturaPopup;