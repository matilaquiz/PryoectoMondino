import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CarritoContext } from '../Context/CarritoContext';
import { LoginContext } from '../Context/LoginContext';
import { useNavigate } from 'react-router-dom';

export function CardProducto({
  id = '1',
  nombre = 'matias',
  precio = '0',
  descripcion = 'blalbal',
}) {
  const { listadosProdCarrito, setListadosProdCarrito } =
    useContext(CarritoContext);
  const { usuario } = useContext(LoginContext);
  const navigate = useNavigate();

  const guardarCarritoEnLocalStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };

  const addProdCarrito = (producto) => {
    setListadosProdCarrito((listadosProdCarrito) => {
      if (listadosProdCarrito.some((prod) => prod.id == producto.id)) {
        return listadosProdCarrito;
      }
      const nuevoCarrito = [...listadosProdCarrito, producto];
      guardarCarritoEnLocalStorage(nuevoCarrito); // Guardar en LocalStorage
      return nuevoCarrito;
    });
  };

  const changeId = (id) => {
    navigate(`/DetalleProducto/?id=${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 250,
        background: 'white',
        margin: '15px',
        width: '250px',
        borderRadius: '20px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        ':hover': { transform: 'scale(1.05)', boxShadow: '3px 3px 15px black' },
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.9)', // Cambia a tu color deseado
        },
      }}
      key={id}
    >
      <CardActionArea
        onClick={() => changeId(id)}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent', // Cambia a tu color deseado
          },
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', textAlign: 'center' }}
          >
            {nombre}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '40px',
        }}
      >
        {usuario && (
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}
          >
            {precio}
          </Typography>
        )}
        {usuario && (
          <Button size="large">
            <AddShoppingCartIcon
              size="large"
              onClick={() =>
                addProdCarrito({
                  id: id,
                  nombre: nombre,
                  precio: precio,
                  descripcion: descripcion,
                  cantidad: 1,
                })
              }
            />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
