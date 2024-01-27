import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setItem({
            ...docSnapshot.data(),
            id: docSnapshot.id,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El documento no existe',
          });
          
        }
      } catch (error) {
        console.error('Error al obtener el documento:', error);
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al obtener el documento',
        });
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;