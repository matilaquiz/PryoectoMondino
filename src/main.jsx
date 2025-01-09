import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { Rutas } from './Rutas/Rutas.jsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas></Rutas>
  </StrictMode>,
)
