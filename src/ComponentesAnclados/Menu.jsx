import React, { useContext, useEffect, useState } from 'react';
import '../Estilos/landingPage.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import HookListaCategorias from '../Hooks/HookListaCategorias';
import { ProductosContext } from '../Context/ProductosContext';

export function Menu() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { listaCategorias } = HookListaCategorias();
  const { setProductosFiltrados, productosOriginales, isLoading } =
    useContext(ProductosContext);

  const selectCategoria = (id) => {
    navigate('/?categoria=' + id);
  };

  useEffect(() => {
    const idCategoria = searchParams.get('categoria');
    const nombreParam = searchParams.get('nombre');

    if (!idCategoria && !nombreParam) {
      setProductosFiltrados(productosOriginales);
      return;
    }

    /* if (!idCategoria || searchParams.keys().next().value !== 'categoria') {
      return;
  } */
    if (idCategoria) {
      const nuevaLista = productosOriginales.filter(
        (prod) => prod.idCategoria === parseInt(idCategoria),
      );
      console.log(nuevaLista, productosOriginales, idCategoria);
      setProductosFiltrados(nuevaLista);
    }
  }, [searchParams, isLoading]);

  return (
    <>
      <ul className="menu1">
        {listaCategorias.map((categoria) => (
          <div
            className="item"
            onClick={() => selectCategoria(categoria.idCategoria)}
          >
            <li className="opcion"></li>
            <a>{categoria.nombreCategoria.toUpperCase()}</a>
          </div>
        ))}
      </ul>
    </>
  );
}
