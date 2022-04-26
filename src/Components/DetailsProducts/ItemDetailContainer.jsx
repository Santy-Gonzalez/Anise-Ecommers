import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { detailProduct } from '../Utils/ProductsFireBase';

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    detailProduct(id)
    .then((res) => {setDetails(res);
    })
    .catch((err) => { console.log(err);
    });
  }, [id]);

  return (
    <>
      <ItemDetail details = {details} />
    </>
  )
}

export default ItemDetailContainer;
