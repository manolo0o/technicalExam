import React from 'react';
import '../styles/FacturaDetails.css';

const FacturaDetails = ({ factura, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Detalles de la Factura</h2>
        <p><strong>Fecha:</strong> {factura.FT_Fecha}</p>
        <p><strong>Cliente:</strong> {factura.id_Cliente ? `${factura.id_Cliente.Cl_Nombre} ${factura.id_Cliente.Cl_Apellido}` : 'No disponible'}</p>
        <p><strong>Nit:</strong> {factura.id_Cliente ? factura.id_Cliente.Cl_Nit : 'No disponible'}</p>
        <div className="line"></div>
        <div className="productos-list">
          <div className="producto-header">
            <p><strong>PROD.</strong></p>
            <p><strong>CANT.</strong></p>
            <p><strong>P.UNITARIO</strong></p>
            <p><strong>TOTAL</strong></p>
          </div>
          {factura.productos.map((producto, index) => (
            <div key={index} className="producto-item">
              <p>{producto.id_Producto ? producto.id_Producto.Art_Nom : 'No disponible'}</p>
              <p>{producto.cant_Producto}</p>
              <p>{producto.precio_Unitario}</p>
              <p>{producto.totalProd}</p>
            </div>
          ))}
        </div>
        <div className="line"></div>
        <p className="total"><strong>Total:</strong> {factura.total}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default FacturaDetails;