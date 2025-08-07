import { useState } from 'react';

import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './StyleLogin.css';
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';

export default function Login({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const [enEspera, setEnEspera] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const userLogin = (e) => {
    e.preventDefault();
    setEnEspera(true);
    const body = {
      mail: userEmail,
      pass: userPassword,
    };

    const fetchUsuario = async () => {
      try {
        const resp = await axios.post(
          'http://localhost:3000/generarPassword',
          body,
        );
        localStorage.setItem('token', resp.data.token);
        setEnEspera(false);
        window.location.reload();
      } catch (e) {
        console.log(e.response.data.message);
        setEnEspera(false);
        setError(e.response.data.message);
      }
    };

    fetchUsuario();
  };

  return (
    <div className="modal">
      <form action="" onSubmit={userLogin} className="modal-content">
        <div className="hederLogin">
          <img
            src="/public/logo_web_fdo_oscuro-2.svg"
            alt="mati"
            style={{
              background: 'radial-gradient(circle , #5A7893 , #3F5A72)',
              display: 'flex',
              width: '60%',
              height: '60px',
              borderRadius: '5px',
              marginLeft: '20px',
              paddingLeft: '20px',
              paddingRight: '20px',
              filter:
                'brightness(1.4) drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))',
            }}
          />
          <Button
            sx={{ minWidth: '0px', marginLeft: '50px' }}
            className="close"
            onClick={onClose}
          >
            x
          </Button>
        </div>
        <p style={{ fontWeight: 'bolder' }}>
          Inicia sesión con tu correo y contraseña
        </p>
        <TextField
          variant="outlined"
          label="Correo Electrónico"
          margin="normal"
          onChange={(e) => setUserEmail(e.target.value)}
        ></TextField>
        <TextField
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <p>{error}</p>
        {!enEspera ? (
          <Button
            type="submit"
            sx={{
              backgroundColor: '#0D6EFD',

              '&:hover': {
                background: '#a2b5d2',
                color: 'black',
                boxShadow: '2px 2px 10px rgb(86, 106, 141)',
              },
            }}
            variant="contained"
          >
            Ingresar
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            disabled // Deshabilitar el botón mientras se carga
            sx={{
              position: 'relative', // Necesario para posicionar el loader
            }}
          >
            Ingresar
            <CircularProgress
              size={24} // Tamaño del indicador de carga
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px', // Ajuste para centrar verticalmente
                marginLeft: '-12px', // Ajuste para centrar horizontalmente
              }}
            />
          </Button>
        )}
      </form>
    </div>
  );
}
