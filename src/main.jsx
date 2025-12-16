import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Fuck from './Fuck'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Fuck />
  </StrictMode>,
)
