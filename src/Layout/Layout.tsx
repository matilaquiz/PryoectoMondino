import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ProductosProvider from '../Context/ProductosProvider';
import CarritoProvider from '../Context/CarritoProvider';
import CarritoSimbolo from '../Estilos/CarritoSimbolo';
import LoginProvider from '../Context/LoginProvider';
import Search from '../Estilos/Search';
import LogoPrincipal from '../Estilos/LogoPrincipal';
import BtnLogin from '../Login/BtnLogin';
import '../Estilos/landingPage.css';

const Layout = () => {
  return (
    <LoginProvider>
      <ProductosProvider>
        <CarritoProvider>
          <div className="buscador-carrito">
            <LogoPrincipal></LogoPrincipal>
            <Search></Search>
            <BtnLogin></BtnLogin>
            <CarritoSimbolo></CarritoSimbolo>
          </div>
          <Outlet />
        </CarritoProvider>
      </ProductosProvider>
    </LoginProvider>
  );
};

export default Layout;
