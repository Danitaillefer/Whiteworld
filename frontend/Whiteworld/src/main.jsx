import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Core from './components/Core.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Core />
  </StrictMode>,
)
