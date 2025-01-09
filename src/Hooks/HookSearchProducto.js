import {React,useState,useEffect} from 'react'
import axios from 'axios';

export  function HookSearchProducto(id) {
    const [detProducto, setDetProducto] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await axios.get("http://localhost:3000/buscarProducto/" + id)

                setDetProducto(response.data)
                setIsLoading(false)
            } catch (error) {
                console.warn(error)
            }
        }
        if(id) fetchProducto()
    }, [id]);
   
    return  {
        detProducto,
        isLoading
    }
}