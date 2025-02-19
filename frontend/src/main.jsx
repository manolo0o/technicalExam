import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'


//components 
import LateralMenu from './components/Lateral_menue.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LateralMenu />
  </StrictMode>,
)
