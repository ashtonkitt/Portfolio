import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './style.css'
import './style-wireframes.css'

import { StaticModeProvider } from './context/StaticModeContext.jsx'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StaticModeProvider>
        <App />
      </StaticModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
