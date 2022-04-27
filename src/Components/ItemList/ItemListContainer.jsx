import React, { useState , useEffect } from "react";
import ItemList from "./ItemList";
import "./styleItems.css"
import { useParams , Link } from "react-router-dom";
import {traerProducto , getProductsCategory} from "../Utils/ProductsFireBase"

export default function ItemListContainer() {

  const {categoryId} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
      if (categoryId) {
        getProductsCategory(categoryId)
        .then((res) => {
          if (res.size === 0) {
            console.log("No se encontraron resultados");
          } else {
            // mapeamos los resultados
            console.log(res.data);
            setProducts(
              res.docs.map((item) => ({ id: item.id, ...item.data() }))
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    else {
        traerProducto()
        .then((res) =>  
          {setProducts(
            res.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
        })
        .catch((err) => {console.log(err);
        });
      }
    }, [categoryId]);

    return (
      <>
    <div className="container">
      <div className="tittlelist">
        <h1>Tienda</h1>
      </div>
      <div>
        <ul className="categoryLink">
          <Link to={"/category/Anillo"}> <li>Anillos <span>|</span></li> </Link>
          <Link to={"/category/Aros"}> <li>Aros <span>|</span></li> </Link>
          <Link to={"/category/Collar"}> <li>Collares <span>|</span></li>  </Link>
          <Link to={"/category/Pulsera"}> <li>Pulseras</li> </Link>
        </ul>
      </div>
    </div>

    {products ? (
      <ItemList products = {products}/>
      ) : (<></>)}
        
    </>
  );
}
