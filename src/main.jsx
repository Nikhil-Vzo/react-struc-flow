import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Fuck from './Fuck'
import Div from './Div'
import Java from './Java'
import After from './After'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Fuck />
    <Div />
    <Java />
    <After />
  </StrictMode>,
)
