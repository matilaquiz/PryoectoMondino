import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { Principal } from '../LandingPage/Principal'
import { FormularioContacto } from '../Contacto.jsx/FormularioContacto'
import Enseñanza from '../Enseñanzas/Enseñanza'
import { PaginaDetallesProducto } from '../DetallesProductos/PaginaDetallesProducto'
import Layout from '../Layout/Layout'

export function Rutas() {
  return (
    
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
               <Route index element={<Principal/>}></Route>
               <Route path='/FormularioContacto' element={<FormularioContacto/>}></Route>
               <Route path='/CargarImg' element={<Enseñanza/>}></Route>
               <Route path='/DetalleProducto' element={<PaginaDetallesProducto/>}></Route>
              </Route>
            </Routes>
        </BrowserRouter>
  )
}
