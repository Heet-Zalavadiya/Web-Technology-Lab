import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App'
import Card from './Components/Card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Card/>
  </StrictMode>,
)
