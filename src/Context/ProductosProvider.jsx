import React, { useEffect } from 'react'
import { useState } from 'react';
import { ProductosContext } from './ProductosContext';
import { HookListaProductos } from '../Hooks/HookListaProductos';


export default function ProductosProvider({children}) {
    const { listaProductos: productosOriginales, isLoading } = HookListaProductos();
    const [productosFiltrados, setProductosFiltrados] = useState(productosOriginales)
    
/*     useEffect(() => {
        if(!isLoading) setProductosFiltrados(productosOriginales)
    }, [isLoading]) */

  return (

        <ProductosContext.Provider value={{productosOriginales, setProductosFiltrados, productosFiltrados, isLoading }} >
                {children}
        </ProductosContext.Provider>

  )
}
