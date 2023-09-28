import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='row'>
      <div className='col-3'>
        <h1>Esto</h1>
      </div>
      <div className='col-3'>
        <h1>Es Una</h1>
      </div>
      <div className='col-3'>
        <h1>Prueba</h1>
      </div>
    </div>
  </React.StrictMode>,
)
