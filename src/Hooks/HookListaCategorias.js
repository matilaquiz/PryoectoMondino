import { useEffect, useState } from 'react';
import axios from 'axios';
export default function HookListaCategorias() {
  const [listaCategorias, setListaCategorias] = useState([]);

  useEffect(() => {
    const fetchListaCategorias = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/buscarCategorias',
        );
        setListaCategorias(response.data);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchListaCategorias();
  }, []);

  return {
    listaCategorias,
  };
}
