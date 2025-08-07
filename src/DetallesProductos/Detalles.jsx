import { Button } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LoginContext } from '../Context/LoginContext';

export function Detalles({ detalles }) {
  const {
    listadosProdCarrito,
    setListadosProdCarrito,
    cantidades,
    setCantidades,
  } = useContext(CarritoContext);
  const [cant, setCant] = useState(1);
  const { usuario } = useContext(LoginContext);

  const guardarCarritoEnLocalStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };

  const seisCuotas = (precio) => {
    return parseFloat((precio / 6).toFixed(2));
  };

  const cargarProducto = (detalles) => {
    setListadosProdCarrito((listadosProdCarrito) => {
      if (listadosProdCarrito.some((prod) => prod.id === detalles.id)) {
        const listaActualizada = listadosProdCarrito.map((prod) =>
          prod.id === detalles.id
            ? { ...prod, cantidad: prod.cantidad + detalles.cantidad }
            : prod,
        );
        guardarCarritoEnLocalStorage(listaActualizada);
        return listaActualizada;
      }
      const addProdDetalles = [...listadosProdCarrito, detalles];
      guardarCarritoEnLocalStorage(addProdDetalles);
      return addProdDetalles;
    });
  };

  const cantidadProd = (detalles) => {
    const producto = listadosProdCarrito.find((prod) => prod.id === detalles);
    return producto ? producto.cantidad : 0;
  };

  const elegirCantidad = (event) => {
    const cant = event.target.value;
    setCant(cant);
    detalles.cantidad = cant;
  };

  return (
    <div
      style={{
        background: 'linear-gradient(0deg, #a2b5d2, #3a648b)',
        width: '40%',
        minWidth: '300px',
        height: '400px',
        borderRadius: '20px',
        boxShadow: '2px 2px 10px black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        position: 'relative',
      }}
    >
      <h3 style={{ fontSize: '30px', color: 'black', marginTop: '0px' }}>
        {detalles.nombre.toUpperCase()}
      </h3>
      {usuario && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h7 style={{ fontSize: '25px', color: 'green' }}>
            Precio unitario: $ {detalles.precio}
          </h7>
          <h7 style={{ fontSize: '18px', color: 'green', marginTop: '5px' }}>
            en 6 cuotas de ${seisCuotas(detalles.precio)}
          </h7>

          <h7 style={{ fontSize: '18px', color: 'blue', marginTop: '30px' }}>
            {cantidadProd(detalles.id) > 0
              ? `${cantidadProd(detalles.id)} producto/s agregado/s al carrito `
              : 'Producto no agregado al carrito'}
          </h7>
        </div>
      )}
      <Box sx={{ minWidth: 120, marginTop: 8, width: '50%' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cant}
            label="Cantidad"
            onChange={elegirCantidad}
          >
            <MenuItem value={1}>
              Cantidad:<span>1 unidad</span>
            </MenuItem>
            <MenuItem value={2}>
              Cantidad:<span>2 unidad</span>
            </MenuItem>
            <MenuItem value={3}>
              Cantidad:<span>3 unidad</span>
            </MenuItem>
            <MenuItem value={4}>
              Cantidad:<span>4 unidad</span>
            </MenuItem>
            <MenuItem value={5}>
              Cantidad:<span>5 unidad</span>
            </MenuItem>
            <MenuItem value={6}>
              Cantidad:<span>6 unidad</span>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        disabled={!usuario}
        onClick={() => {
          cargarProducto(detalles);
        }}
        sx={{
          width: '50%',
          padding: '10px 40px',
          background: '#6f8bbd',
          color: 'white',
          position: 'absolute',
          bottom: '20px',
          '&:hover': {
            background: '#a2b5d2',
            color: 'black',
            boxShadow: '2px 2px 10px rgb(86, 106, 141) ',
          },
        }}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
}
