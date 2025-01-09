import React, { useContext, useEffect, useState } from 'react';
import { CardProducto } from './CardProducto';
import "../Estilos/landingPage.css";
import { HookListaProductos } from '../Hooks/HookListaProductos';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Pagination from '@mui/material/Pagination';
import { ProductosContext } from '../Context/ProductosContext';

export function Curepo() {

    const{productosFiltrados, isLoading}=useContext(ProductosContext)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5; 
   


    if (isLoading) {
        return (
            <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
            >
                Cargando...
            </LoadingButton>
        );
    }

   
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = productosFiltrados.slice(startIndex, endIndex);
    
   
    const totalPages = Math.ceil(productosFiltrados.length / productsPerPage);
    const handleChangePage = (value) => {
        setCurrentPage(value);
      };

    return (
        <div className="cuerpoInside">
            <div className='cards'>
                {currentProducts.map((product) => (
                    <CardProducto
                        key={product.idProducto}
                        id={product.idProducto}
                        nombre={product.nombreProducto}
                        precio={product.precioProducto}
                        descripcion={product.descripcionProducto}
                    />
                ))}
            </div>
            <footer className="paginationFooter">

                <Pagination
                    sx={{color:"white","& .MuiPaginationItem-root": {color: "white", borderColor: "white" }}}
                    count={totalPages}
                    page={currentPage}
                    onChange={(event, value) => {
                        // Verifica si el evento proviene de un botón de flecha
                        const isArrow =
                          event.target.getAttribute("aria-label")?.includes("Previous") ||
                          event.target.getAttribute("aria-label")?.includes("Next");
                    
                        if (isArrow) {
                          handleChangePage(event, value); // Cambia de página solo con flechas
                        }
                    }}
                    variant="outlined"
                   
                />
            </footer>

        </div>
    );
}
