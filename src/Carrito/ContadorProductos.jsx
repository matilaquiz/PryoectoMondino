import React, { useEffect } from 'react'
import { useState } from 'react';
import {
    Box,
    Button,
    Typography,
} from '@mui/material'



export default function ContadorProductos({onCantidadChange}) {
const [cantidad, setCantidad] = useState(1);

useEffect(()=>
onCantidadChange?.(cantidad),[cantidad]
)
const aumentarCantidad=()=>{
    setCantidad((prev)=>prev+1) //es para saber que podes usar una funcion flecha para el valor
   
}
const disminuirCantidad=()=>{
    if(cantidad>1){
    setCantidad(cantidad-1)
    }
}


    return (
        <Box display="flex" alignItems="center">
            <Button
                variant="outlined"
                size="small"
                onClick={disminuirCantidad}
                sx={{
                    minWidth: '40px',          
                    padding: '4px 8px',        
                          
                    height: '30px',            
                  }}
            >
                -
            </Button>
            <Typography
                variant="body1"
                sx={{ margin: '0 10px', minWidth: '20px', textAlign: 'center',fontWeight:"bold" ,fontSize:"20px"}}
            >
                {cantidad}
            </Typography>
            <Button
                variant="outlined"
                size='small'
                onClick={aumentarCantidad}
                sx={{
                    minWidth: '40px',          
                    padding: '4px 8px',        
                          
                    height: '30px',           
                  }}
            >
                +
            </Button>
        </Box>
     

    )
}
