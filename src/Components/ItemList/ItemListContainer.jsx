import React, { useState , useEffect } from "react";
import ItemList from "./ItemList";
import {traerProducto , getProductsCategory} from "../Products/Products"
import "./styleItems.css"
import { useParams , Link } from "react-router-dom";

export default function ItemListContainer() {

  const {category} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
      if (category) {
        let categoryId = null;
        if (category == "Anillos") {
          categoryId = 1;
        }
        if (category == "Aros") {
          categoryId = 2;
        }
        if (category == "Collares") {
          categoryId = 3;
        }
        if (category == "Pulseras") {
          categoryId = 4;
        }

      if (categoryId) {
        getProductsCategory(categoryId)
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }else {
        traerProducto()
        .then((res) =>  {setProducts(res);
        })
        .catch((err) => {console.log(err);
        });
      }
    }, [category]);

    return (
      <>
    <div className="container">
      <div className="tittlelist">
        <h1>Tienda</h1>
      </div>
      <div>
        <ul className="categoryLink">
          <Link to={"/category/Anillos"}> <li>Anillos <span>|</span></li> </Link>
          <Link to={"/category/Aros"}> <li>Aros <span>|</span></li> </Link>
          <Link to={"/category/Collares"}> <li>Collares <span>|</span></li>  </Link>
          <Link to={"/category/Pulseras"}> <li>Pulseras</li> </Link>
        </ul>
      </div>
    </div>

    {products ? (
      <ItemList products = {products}/>
      ) : (<></>)}
        
    </>
  );
}
