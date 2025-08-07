import { useState } from 'react';
import { LoginContext } from './LoginContext';

export default function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(false);

  return (
    <LoginContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </LoginContext.Provider>
  );
}
