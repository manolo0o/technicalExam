import React from 'react';
import '../styles/FacturaDetails.css';

const FacturaDetails = ({ factura, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Detalles de la Factura</h2>
        <p><strong>Fecha:</strong> {factura.FT_Fecha}</p>
        <p><strong>Cliente:</strong> {factura._id.Cl_Nombre} {factura._id.Cl_Apellido} - {factura._id.Cl_Nit}</p>
        <p><strong>Producto:</strong> {factura._id.Art_Nom}</p>
        <p><strong>Cantidad:</strong> {factura.cant_Producto}</p>
        <p><strong>Precio Unitario:</strong> {factura.precio_Unitario}</p>
        <p><strong>Total Producto:</strong> {factura.totalProd}</p>
        <p><strong>Total:</strong> {factura.total}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default FacturaDetails;