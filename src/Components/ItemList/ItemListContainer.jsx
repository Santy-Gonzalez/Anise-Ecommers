import React, { useState , useEffect } from "react";
import ItemList from "./ItemList";
import {traerProducto} from "../Products/Products"
import "./styleItems.css"

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      traerProducto()
      .then((res) =>  {setProducts(res);
        console.log(res);
      })
      .catch((err) => {console.log(err);
      });
      console.log(products);
  }, );
  
  return (
    <>
    {products ? (
      <ItemList products = {products}/>
      ) : (<></>)}
        
    </>
  );
}
