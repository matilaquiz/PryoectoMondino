import { useContext, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from '../Context/LoginContext';

export default function HookRevisarExpiracionToken({
  token,
  setMsjError,
  setOpen,
}) {
  const { setUsuario } = useContext(LoginContext);
  useEffect(() => {
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
      const interval = setInterval(firmarToken, 1 * 60 * 1000); // Verifica cada 1 minuto
      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    } else {
      return;
    }
  }, [token]);
}
