import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { CarritoContext } from '../Context/CarritoContext';

export default function ContadorProductos({
  prodId,
  prodCantidad,
  onCantidadChange,
}) {
  const [cantidad, setCantidad] = useState();
  const { listadosProdCarrito, setListadosProdCarrito } =
    useContext(CarritoContext);

  useEffect(() => {
    const productoEnCarrito = listadosProdCarrito.find(
      (prod) => prod.id === prodId,
    );
    if (productoEnCarrito) {
      setCantidad(productoEnCarrito.cantidad);
    }
  }, [prodId, listadosProdCarrito]);

  const actualizarLista = (cant) => {
    const nuevaLista = listadosProdCarrito.map((prod) =>
      prod.id === prodId ? { ...prod, cantidad: cant } : prod,
    );
    setListadosProdCarrito(nuevaLista);
  };

  const aumentarCantidad = () => {
    const cant = cantidad + 1;
    setCantidad(cant); //es para saber que podes usar una funcion flecha para el valor
    actualizarLista(cant);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      const cant = cantidad - 1;
      setCantidad(cant);
      actualizarLista(cant);
    }
  };

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
        sx={{
          margin: '0 10px',
          minWidth: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        {cantidad}
      </Typography>
      <Button
        variant="outlined"
        size="small"
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
  );
}
