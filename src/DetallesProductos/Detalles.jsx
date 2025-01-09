import { Button } from '@mui/material'
import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from "../Context/CarritoContext";

export function Detalles({ detalles }) {
    const { listadosProdCarrito, setListadosProdCarrito } = useContext(CarritoContext)
    const guardarCarritoEnLocalStorage = (carrito) => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
      };

    const seisCuotas = (precio) => {
        return parseFloat((precio / 6).toFixed(2))

    }

    const cargarProducto=(detalles)=>{
        const addProdDetalles=[...listadosProdCarrito,detalles]
        guardarCarritoEnLocalStorage(addProdDetalles)
        setListadosProdCarrito(addProdDetalles)
    }


    console.log(detalles)







    return (
        <div style={{ background: "linear-gradient(0deg, #a2b5d2, #3a648b)", width: "40%", minWidth: "300px", height: "400px", borderRadius: "20px", boxShadow: "2px 2px 10px black", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px", position: "relative" }}>
            <h3 style={{ fontSize: "30px", color: "black", marginTop: "0px" }}>{detalles.nombre.toUpperCase()}</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h7 style={{ fontSize: "25px", color: "green" }}>Precio: $ {detalles.precio}</h7>
                <h7 style={{ fontSize: "18px", color: "green" }}>en 6 cuotas de ${seisCuotas(detalles.precio)}</h7>
            </div>
            <Button 
                onClick={()=>cargarProducto(detalles)}
                sx={{
                    padding: "10px 40px",
                    background: "#6f8bbd",
                    color: "white",
                    position: "absolute",
                    bottom: "20px",
                    "&:hover": {
                        background: "#a2b5d2",
                        color: "black",
                        boxShadow: "2px 2px 10px rgb(86, 106, 141) "
                    }
                }}>Agregar al Carrito</Button>
        </div>
    )
}
