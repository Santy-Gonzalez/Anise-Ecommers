import React, { useState , useEffect } from "react";
import ItemList from "./ItemList";
import "./styleItems.css"
import { useParams , Link } from "react-router-dom";
import {traerProducto , getProductsCategory} from "../Utils/ProductsFireBase"
import CircleLoader from "react-spinners/CircleLoader";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ItemListContainer() {

  useEffect(()=>{
      Aos.init({duration:1500});
  },[])

  const {categoryId} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const spinnerTempleate = (
      <div className="sweet-loading">
        <CircleLoader size={150} color={"#000"} loading={loading} speedMultiplier={1.5} />
      </div>
    )

    const itemsMenu = [
      {
        title: "Anillos",
        url: `/category/Anillo`,
        span: <span>|</span>,
      },
      {
        title: "Aros",
        url: `/category/Aros`,
        span: <span>|</span>,
      },
      {
        title: "Collares",
        url: `/category/Collar`,
        span: <span>|</span>,
      },
      {
        title: "Pulseras",
        url: `/category/Pulsera`,
      },
    ];

    useEffect(()=>{
      setLoading(true);
      if (categoryId) {
        getProductsCategory(categoryId)
        .then((res) => {
          if (res.size === 0) {
            console.log("No se encontraron resultados");
          } else {
            // mapeamos los resultados
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
        <div data-aos="zoom-in" className="tittlelist">
          <h1>Tienda</h1>
        </div>
        <div data-aos="zoom-in">
          <ul className="categoryLink">
            {itemsMenu.map((item) => (
              <li className="linksContainer" key={item.title}>
                <Link to={item.url}>{item.title} {item.span}</Link>
              </li>
            ))}
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
