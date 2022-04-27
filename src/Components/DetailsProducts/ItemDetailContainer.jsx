import React, { useState , useEffect } from 'react'
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const products = doc(db, "Products", id);
    getDoc(products).then((res) => {
      setDetails({id: res.id, ...res.data()});
    });
  }, [id]);

  return (
    <>
      <ItemDetail details = {details} />
    </>
  )
}

export default ItemDetailContainer;
