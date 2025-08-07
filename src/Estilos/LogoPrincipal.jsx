import { useNavigate } from 'react-router-dom';

export default function LogoPrincipal() {
  const navigate = useNavigate();

  const limpiarParams = () => {
    navigate('/?');
  };

  return (
    <div onClick={limpiarParams}>
      <img
        src="/public/logo_web_fdo_oscuro-2.svg"
        alt="mati"
        style={{
          background: 'radial-gradient(circle , #5A7893 , #3F5A72)',
          display: 'flex',
          width: '250px',
          height: '60px',
          borderRadius: '5px',
          marginLeft: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          filter: 'brightness(1.4) drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
