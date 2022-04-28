import React, { useState , useEffect } from 'react'
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import CircleLoader from "react-spinners/CircleLoader";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [details, setDetails] = useState({});

  const [loading, setLoading] = useState(false);

  const spinnerTempleate = (
    <div className="sweet-loading">
      <CircleLoader size={150} color={"#000"} loading={loading} speedMultiplier={1.5} />
    </div>
  )

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const products = doc(db, "Products", id);
    getDoc(products).then((res) => {
      setDetails({id: res.id, ...res.data()});
    })
    .finally(() => {
      // Ocultamos el spinner
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? spinnerTempleate : <ItemDetail details = {details} />}
    </>
  )
}

export default ItemDetailContainer;
