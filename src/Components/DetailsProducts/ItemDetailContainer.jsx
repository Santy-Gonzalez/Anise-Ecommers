import React, {useState , useEffect} from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [details, setDetails] = useState()
  const ring = {
    "id": 1,
    "cod": "uno",
    "nombre": "Anillo Maggie",
    "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w",
    "precio": 1099900,
    "details": "Esta es una pieza de joyería. Hecha a mano con metales preciosos por artesanos de un pequeño pueblo. Es la pieza perfecta para complementar cualquier conjunto.",
  }

  useEffect(() => {
    const getProduct = () =>{
     return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(setDetails(ring));
          }, 2000);
       reject("No existe el producto");
     });
    }
  });

  return (
    <>
      <ItemDetail detail={details}/>
    </>
  )
}

export default ItemDetailContainer;
