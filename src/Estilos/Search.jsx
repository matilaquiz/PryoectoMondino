import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState,useContext,useEffect } from 'react';
import { ProductosContext } from '../Context/ProductosContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search() {
  const{productosOriginales, productosFiltrados,setProductosFiltrados,isLoading}=useContext(ProductosContext)
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [searchParams]=useSearchParams()
  const navigate=useNavigate()

 
  useEffect(()=>{
    const nombreParam=searchParams.get("nombre")
 
   
    if(nombreParam){ 
   const  nuevaLista = productosOriginales.filter((prod) =>prod.nombreProducto.toLowerCase().includes(nombreParam.toLowerCase()))
   
    setProductosFiltrados(nuevaLista) }
  },[searchParams,isLoading])

  const buscar=(valorBusqueda)=>{
    navigate(
      !valorBusqueda 
      ? "/?nombre"
      :`/?nombre=${valorBusqueda}`
     );
  }



  return (
   <div style={{display:"flex",justifyContent:"center",alignSelf:"center",outline:"solid 1px"}}> 
      <InputBase
        sx={{ ml: 1 ,width:"300px"}}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={valorBusqueda}
        onChange={(e) => setValorBusqueda(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            buscar(valorBusqueda); // Llama a la función buscar al presionar Enter
          }
        }
      }
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={()=>buscar(valorBusqueda)}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}