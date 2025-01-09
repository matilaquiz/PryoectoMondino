import React, { useContext } from "react";
import { Badge, IconButton,Box  } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CarritoContext } from "../Context/CarritoContext";
import { CarritoDesplegable } from "../Carrito/CarritoDesplegable";

function CarritoSimbolo() {
    const {listadosProdCarrito,setAbrirMOdalCarrrito,abrirMOdalCarrrito}=useContext(CarritoContext)
    //{abrirMOdalCarrrito ? </CarritoDesplegable> : null}


      const handleOpenShoppingCart=()=>{
        if(!abrirMOdalCarrrito){
        setAbrirMOdalCarrrito(true)}
        else{ setAbrirMOdalCarrrito(false)}
      }
    
  return (
    <>
    <IconButton color="primary"  aria-label="carrito de compras" onClick={handleOpenShoppingCart}>
      <Badge
        badgeContent={listadosProdCarrito.length}
        color="error"
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ShoppingCartIcon fontSize="large"  sx={{color:"#3a648b"}}></ShoppingCartIcon>
      </Badge>
    </IconButton>
    
    <Box
        sx={{
          position: "absolute", 
          top: "60px",
          right: abrirMOdalCarrrito ? "0" : "-300px",
          width: abrirMOdalCarrrito ? "100%" : "0px",
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          opacity: abrirMOdalCarrrito ? 1 : 0,
          transform: abrirMOdalCarrrito ? "translateY(0)" : "translateY(-20px)",
          visibility: abrirMOdalCarrrito ? "visible" : "hidden", 
          zIndex: 10, 
        }}
        
      >
        <CarritoDesplegable ></CarritoDesplegable>
      </Box>

    </>
  );
  s
}

export default  CarritoSimbolo;
