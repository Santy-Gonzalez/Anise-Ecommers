import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { traerProducto } from '../Products/Products';

const ItemDetailContainer = () => {

  const { detailsId } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    traerProducto(detailsId)
    .then((res) => {setDetails(res);
    })
    .catch((err) => { console.log(err);
    });
  }, [detailsId]);

  return (
    <>
      <>
        <ItemDetail article={details} />
      </>
    </>
  )
}

export default ItemDetailContainer;
