import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function Enseñanza() {

    const [imagen, setImagen] = useState({})


    const cambiar = (event) => {
        setImagen(event.target.files[0])
    }

    const formData = new FormData();
    formData.append('image', imagen);


    const subirArchivo = (e) => {
        e.preventDefault()

        const mandarImagen = async () => {
            try {
                const response = await axios.post("http://localhost:3000/imagen", formData)
                console.log(response.data)

            } catch (error) {
                console.warn(error)
            }
        }
        mandarImagen()
    }

    /* try {
       const response = await fetch('http://localhost:3001/upload', {
         method: 'POST',
         body: formData,
       });
       const result = await response.json();
       setMessage(result.message);
       console.log(result.imageUrl); // Aquí puedes usar la URL para mostrar la imagen cargada
     } catch (error) {
       console.error('Error al subir la imagen:', error);
     }*/

    return (
        <form action="" onSubmit={subirArchivo}>
            <input type="file" onChange={cambiar} />
            <button>holisssssssss</button>
        </form>

    )
}
