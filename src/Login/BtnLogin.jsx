import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useContext, useState } from 'react';
import Login from './Login';
import { LoginContext } from '../Context/LoginContext';
import LogoutIcon from '@mui/icons-material/Logout';
export default function BtnLogin() {
  const [ModalLogin, setModalLogin] = useState(false);
  const { usuario } = useContext(LoginContext);

  return (
    <div>
      {!usuario ? (
        <Button
          variant="text"
          sx={{ color: '#3a648b' }}
          size="large"
          startIcon={<PersonIcon />}
          onClick={() => setModalLogin(true)}
        >
          Iniciar Sesión
        </Button>
      ) : (
        <Button
          variant="text"
          startIcon={<LogoutIcon />}
          onClick={() => {
            localStorage.removeItem('token'), window.location.reload();
          }}
        >
          Cerrar sesión
        </Button>
      )}
      {ModalLogin ? <Login onClose={() => setModalLogin(false)} /> : null}
    </div>
  );
}
