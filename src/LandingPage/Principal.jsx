import React, { useContext } from 'react'
import { Curepo } from './Curepo'
import "../Estilos/landingPage.css"
import { Menu } from '../ComponentesAnclados/Menu'
import CarritoSimbolo from '../Estilos/CarritoSimbolo'
import CarritoProvider from '../Context/CarritoProvider'
import Search from "../Estilos/Search"
import LogoPrincipal from '../Estilos/LogoPrincipal'
import { colors } from '@mui/material'


export function Principal() {


  return (
    <div className='principal'>
      <div className='filtroNegro'>
        <CarritoProvider >
          <div className='encabezado'>

            <div className='buscador-carrito'>
              <LogoPrincipal></LogoPrincipal>
              <Search></Search>
              <CarritoSimbolo ></CarritoSimbolo>

            </div>
            <div className='fondoMenu'>
              <div className="menu">

                <Menu>

                </Menu>
              </div>
            </div>
          </div>
          <div className="cuerpo">
            <Curepo>

            </Curepo>
          </div>
        </CarritoProvider>
      </div>
    </div>
  )
}
