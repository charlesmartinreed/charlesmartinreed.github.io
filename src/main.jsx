import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import PageNav from './PageNav.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <PageNav />
      <App />
    </Router>
  </StrictMode>,
)
