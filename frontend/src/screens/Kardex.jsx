import React, { useEffect, useState } from 'react';
import '../styles/index.css';

const KardexScreen = () => {
  const [kardex, setKardex] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/kardex')
      .then(response => response.json())
      .then(data => setKardex(data))
      .catch(error => console.error('Error fetching kardex:', error));
  }, []);

  return (
    <div className="screen">
      <header>
        <h1>Kardex</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Fecha Ingreso</th>
            <th>Nombre</th>
            <th>Laboratorio</th>
            <th>Saldo</th>
            <th>Costo</th>
            <th>Precio de Venta</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(kardex) && kardex.map(item => (
            <tr key={item._id}>
              <td>{item.FK_Fecha_Ingreso}</td>
              <td>{item.FK_Nom}</td>
              <td>{item.FK_Lab}</td>
              <td>{item.FK_Saldo}</td>
              <td>{item.FK_Costo}</td>
              <td>{item.FK_PV}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KardexScreen;