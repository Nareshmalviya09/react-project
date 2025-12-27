import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Test } from './pages/test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <Test/> */}
  </BrowserRouter>
)
