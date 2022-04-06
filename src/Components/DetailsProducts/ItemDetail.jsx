import React, {useState} from 'react'
import ItemDetailContainer from './ItemDetailContainer'
const ItemDetail = () => {
  const [details, setDetails] = useState([
    {
        "id": 1,
        "cod": "uno",
        "nombre": "Anillo Maggie",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228653075-WHPTXCS63EID1951JW35/SQSP_Jewelry_Product_101_7423+2.jpg?format=750w",
        "precio": 1099900,
        "details": "Esta es una pieza de joyería. Hecha a mano con metales preciosos por artesanos de un pequeño pueblo. Es la pieza perfecta para complementar cualquier conjunto.",
    },
    {
        "id": 2,
        "cod": "dos",
        "nombre": "Anillo Ketey",
        "imagen": "https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228649233-EA2226P5ZORRRLG94NPQ/SQSP_Jewelry_Product_102_7472.jpg?format=750w",
        "precio": 2229900,
    },
  ])
  return (
    <>
          {details.map((Details) => {
            return(
              <ItemDetailContainer
                keyy = {Details.id}
                cood = {Details.cod}
                naame = {Details.nombre}
                immage = {Details.imagen}
                pricee = {Details.precio}
                details = {Details.details}
              />
            )
          })}
    </>
  )
}
export default ItemDetail;
