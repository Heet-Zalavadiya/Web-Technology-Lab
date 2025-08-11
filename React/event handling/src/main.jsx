import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Event from './components/Event'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Event/>
  </StrictMode>,
)
