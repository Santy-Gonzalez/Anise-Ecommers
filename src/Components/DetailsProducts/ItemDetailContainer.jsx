import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { detailProduct } from '../Products/Products';

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
      console.log(id);
    detailProduct(id)
    .then((res) => {setDetails(res);
      console.log(res);
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

{/* <>
<ItemDetail article={details} />
</> */}