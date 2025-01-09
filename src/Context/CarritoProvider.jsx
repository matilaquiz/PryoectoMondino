import React from 'react'
import { useState } from 'react';
import {CarritoContext} from  "./CarritoContext"

export default function CarritoProvider({children}) {
    const [listadosProdCarrito, setListadosProdCarrito] = useState(() => {
      const carritoGuardado = localStorage.getItem('carrito');
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });
    const [abrirMOdalCarrrito, setAbrirMOdalCarrrito] = useState(false);
  
  return (

        <CarritoContext.Provider value={{listadosProdCarrito, setListadosProdCarrito,abrirMOdalCarrrito, setAbrirMOdalCarrrito }} >
                {children}
        </CarritoContext.Provider>

  )
}
