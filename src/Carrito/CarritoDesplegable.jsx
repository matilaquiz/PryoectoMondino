import * as React from 'react';
import { useContext,useState,useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import Typography from '@mui/material/Typography';
import { CarritoContext } from '../Context/CarritoContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import ContadorProductos from './ContadorProductos';
import "../Estilos/CarritoEstilo.css"



export function CarritoDesplegable() {
  const { listadosProdCarrito, setListadosProdCarrito } = useContext(CarritoContext)
  const [cantidades, setCantidades] = useState({}); // Guardará las cantidades seleccionadas por producto
  const [total,setTotal]=useState(0)
  const actualizarCantidad = (id, cantidad) => {
    setCantidades((prev) => ({ ...prev, [id]: cantidad }));
  };

   console.log(total)
   

   const precioTotal=(precio,cantidad)=>{
     const pre=precio*cantidad
      return pre
   }

   useEffect(() => {
    let total = 0
       listadosProdCarrito.map((producto) => {
      const cantidad = cantidades[producto.id] || 1;
      total+= producto.precio * cantidad
    });
    setTotal(total);
  }, [listadosProdCarrito, cantidades]);
   
  const guardarCarritoEnLocalStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };

  const eliminar = (id) => {
    const listaNueva = listadosProdCarrito.filter(prod => prod.id !== id)
    setListadosProdCarrito(listaNueva)
    guardarCarritoEnLocalStorage(listaNueva)
  }
  return (
    <>

      <List
        sx={{

          maxWidth: 450,
          width: (listadosProdCarrito.length >= 1) ? "450px" : "",
          bgcolor: 'background.paper',
          position: 'absolute',
          right: '4px',
          borderRadius: "10px",
          border: '1px solid #ccc'
        }}
      >
        {listadosProdCarrito.map((producto) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ width: "150px", marginLeft: "-10px" }}>
                <img
                  src="../imagenes/heladera.webp"
                  alt="Heladera"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px", // Opcional: Agrega esquinas redondeadas
                    objectFit: "cover",  // Ajusta la imagen para que se vea bien
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    {producto.nombre}
                  </Typography>
                }
                sx={{ marginTop: "30px", marginLeft: "10px" }}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline', fontSize: "16px" }}
                    >
                      {producto.descripcion}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", fontSize: "20px", fontWeight: "bold", color: 'text.secondary', marginTop: '40px' }}
                    >
                     ${precioTotal(producto.precio,cantidades[producto.id])}
                      <ContadorProductos onCantidadChange={(cantidad) => actualizarCantidad(producto.id, cantidad)}></ContadorProductos>
                    </Typography>


                  </React.Fragment>
                }



              />
              <IconButton color="primary" aria-label="carrito de compras" onClick={() => eliminar(producto.id)}>
                <DeleteForeverIcon sx={{ color: "#9fa8da" }} />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>))}
        {listadosProdCarrito.length > 0 && (
          <div
            style={{
              maxWidth: 450,
              width: "450px",
              position: 'absolute',
              background: "#3a648b",
              marginTop: "2px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              textAlign: 'center',
              border: "solid 1px black",
              color: "white",
              fontSize: "22px"
            }}
          >
            <div className='total'>
              <div>TOTAL</div> <div>${total}</div>
            </div> 
            <Chip
              sx={{
                marginTop: "20px", marginBottom: "10px", background: "#a2b5d2", "&:hover": {
                  background: "#6f8bbd", 
                  color: "white"
                },
              }}
              label="Procesar la Compra"
              onClick=""
              deleteIcon={<DoneIcon />}
            />
          </div>

        )}
      </List>

    </>
  )

}
