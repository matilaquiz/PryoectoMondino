import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CarrouselDetalles from './CarrouselDetalles';
import '../Estilos/EstiloDetallesProducto.css';
import { HookSearchProducto } from '../Hooks/HookSearchProducto';
import { Detalles } from './Detalles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../Estilos/landingPage.css';
import HookRevisarExpiracionToken from '../Hooks/HookRevisarExpiracionToken';

export function PaginaDetallesProducto() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '3px double #000',
    borderRadius: '10px',
    boxShadow: 24,
    color: 'red',
    p: 4,
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const { detProducto, isLoading } = HookSearchProducto(id);
  const token = localStorage.getItem('token');
  const [msjError, setMsjError] = useState('');
  const [open, setOpen] = useState(false);

  const images = [
    '/public/imagenes/fondo.webp',
    '/public/imagenes/heladera.webp',
    '/public/imagenes/heladeras.webp',
  ];

  HookRevisarExpiracionToken({
    token,
    setOpen,
    setMsjError,
  });

  if (isLoading) return <>Loading...</>;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <CarrouselDetalles images={images}></CarrouselDetalles>
      </div>
      <Detalles
        detalles={{
          id: detProducto.idProducto,
          precio: detProducto.precioProducto,
          nombre: detProducto.nombreProducto,
          descripcion: detProducto.descripcionProducto,
          cantidad: 1,
        }}
      ></Detalles>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
            component="h2"
          >
            {msjError}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Debes volver a iniciar sesión
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
