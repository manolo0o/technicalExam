import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './screens/App.jsx'

//components 
import LateralMenu from './components/Lateral_menue.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LateralMenu />
    <App />
  </StrictMode>,
)
