import React, { useEffect, useState } from 'react';
import FacturaDetails from '../components/FacturaDetails.jsx';
import FacturaPopup from '../components/FacturasPopUp.jsx';

const Facturas = () => {
  const [facturas, setFacturas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFactura, setSelectedFactura] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/factura')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFacturas(data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching facturas:', error));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:3000/factura?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFacturas(data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch(error => console.error('Error searching facturas:', error));
  };

  const handleSave = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/factura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newFactura = await response.json();
      setFacturas([...facturas, newFactura]);
      setShowPopup(false);
    } catch (error) {
      console.error('Error saving factura:', error);
    }
  };

  const handleSelectFactura = (factura) => {
    setSelectedFactura(factura);
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
        <button className="add-button" onClick={() => setShowPopup(true)}>Agregar Nueva Factura</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Numero Factura</th>
            <th>Fecha</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(facturas) && facturas.map(factura => (
            <tr key={factura._id}>
              <td>{factura._id}</td>
              <td>{factura.FT_Fecha}</td>
              <td>
                <button onClick={() => handleSelectFactura(factura)}>Ver Detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && <FacturaPopup onClose={() => setShowPopup(false)} onSave={handleSave} />}
      {selectedFactura && <FacturaDetails factura={selectedFactura} onClose={() => setSelectedFactura(null)} />}
    </div>
  );
};

export default Facturas;