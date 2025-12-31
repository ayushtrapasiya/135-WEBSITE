import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './Components/routes/router.jsx'
import Provider from './Components/Store/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <Router />
    </Provider>
  </StrictMode>,
)
