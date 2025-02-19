import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articulos from './screens/Articulos.jsx';
import Clientes from './screens/Clientes.jsx';
import Facturas from './screens/Facturas.jsx';
import LateralMenu from './components/Lateral_menue';
import './styles/index.css'; // Import the global CSS file

const App = () => {
  return (
    <Router>
      <LateralMenu />
      <div className="main-content">
        <Routes>
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/facturas" element={<Facturas />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);