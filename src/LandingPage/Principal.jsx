import { useEffect, useContext, useState } from 'react';
import { Curepo } from './Curepo';
import '../Estilos/landingPage.css';
import { Menu } from '../ComponentesAnclados/Menu';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import HookRevisarExpiracionToken from '../Hooks/HookRevisarExpiracionToken';

export function Principal() {
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
  const token = localStorage.getItem('token');
  /*   const { setUsuario } = useContext(LoginContext); */
  const [msjError, setMsjError] = useState('');
  const [open, setOpen] = useState(false);

  HookRevisarExpiracionToken({ token, setMsjError, setOpen });

  /*  useEffect(() => {
    const firmarToken = async () => {
      try {
        const resp = await axios.get('http://localhost:3000/firmarToken', {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(resp.data);
        setUsuario(true);
      } catch (e) {
        setMsjError(e.response.data.message);
        localStorage.removeItem('token');
        setUsuario(false);
        setOpen(true);
      }
    };
    if (token) {
      firmarToken();
      const interval = setInterval(firmarToken, 1 * 60 * 1000); // Verifica cada 15 minutos
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    } else {
      return;
    }
  }, [token]); */
  return (
    <div className="principal">
      <div className="filtroNegro">
        <div className="encabezado">
          <div className="fondoMenu">
            <div className="menu">
              <Menu></Menu>
            </div>
          </div>
        </div>
        <div className="cuerpo">
          <Curepo></Curepo>
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
      </div>
    </div>
  );
}
