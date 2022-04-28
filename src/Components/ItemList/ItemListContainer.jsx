import React, { useState , useEffect } from "react";
import ItemList from "./ItemList";
import "./styleItems.css"
import { useParams , Link } from "react-router-dom";
import {traerProducto , getProductsCategory} from "../Utils/ProductsFireBase"
import CircleLoader from "react-spinners/CircleLoader";


export default function ItemListContainer() {

  const {categoryId} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const spinnerTempleate = (
      <div className="sweet-loading">
        <CircleLoader size={150} color={"#000"} loading={loading} speedMultiplier={1.5} />
      </div>
    )

    useEffect(()=>{
      setLoading(true);
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
        })
        .finally(() => {
          // Ocultamos el spinner
          setLoading(false);
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
        })
        .finally(() => {
          // Ocultamos el spinner
          setLoading(false);
        });
      }
    }, [categoryId]);

    return (
      <>
      {loading ? 
        spinnerTempleate 
        : 
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
          {products ? (
            <ItemList products = {products}/>
            ) : (<></>)}
      </div>
      }
        
    </>
  );
}
