import React, {useState , useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { traerProducto } from './Product';

const ItemDetailContainer = () => {

  const [details, setDetails] = useState({})

/*     useEffect(() => {
        traerProducto().then((res) => {
          setDetails(res);
        });
    }, []); */

  return (
    <>
      <ItemDetail {...details}/>
    </>
  )
}
export default ItemDetailContainer;
