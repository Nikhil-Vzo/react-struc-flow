import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Fuck from './Fuck'
import Div from './Div'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Fuck />
    <Div />
  </StrictMode>,
)
