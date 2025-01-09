import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductosContext } from '../Context/ProductosContext'
import { useLocation } from "react-router-dom";
import CarrouselDetalles from './CarrouselDetalles';
import "../Estilos/EstiloDetallesProducto.css"
import { HookSearchProducto } from '../Hooks/HookSearchProducto';
import { Detalles } from './Detalles';
import CarritoSimbolo from '../Estilos/CarritoSimbolo'
import CarritoProvider from '../Context/CarritoProvider'
import Search from "../Estilos/Search"
import LogoPrincipal from '../Estilos/LogoPrincipal'
import "../Estilos/landingPage.css"

export function PaginaDetallesProducto() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id")
  const { detProducto, isLoading } = HookSearchProducto(id)




  const images = [
    "../public/imagenes/fondo.webp",
    "../public/imagenes/heladera.webp",
    "../public/imagenes/heladeras.webp",

  ];

  if (isLoading) return <>Loading...</>

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
      <CarritoProvider>
        <div className='buscador-carrito'>
          <LogoPrincipal></LogoPrincipal>
          <Search></Search>
          <CarritoSimbolo ></CarritoSimbolo>

        </div>
        <div>
          <CarrouselDetalles images={images}></CarrouselDetalles>

        </div>
        <Detalles detalles={{id:detProducto.idProducto,precio:detProducto.precioProducto,nombre:detProducto.nombreProducto,descripcion:detProducto.descripcionProducto}}></Detalles>
        </CarritoProvider>
    </div>
  )
}
