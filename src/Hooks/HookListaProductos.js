import {React,useState,useEffect} from 'react'
import axios from 'axios';
export  function HookListaProductos() {
    const [listaProductos, setListaProductos] = useState([]);
    const [ isLoading,  setIsLoading] = useState(true);

    useEffect(() => {
        const fetchListaProductos = async () => {
            try {
                const response = await axios.get("http://localhost:3000/buscarProductos")
                setListaProductos(response.data)
                setIsLoading(false)
            } catch (error) {
                console.warn(error)
            }
        }
        fetchListaProductos()
    }, [])
   
    
  return {
   listaProductos,
   setListaProductos,
   isLoading
}
}
