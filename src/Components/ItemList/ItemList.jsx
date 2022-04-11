import React from "react";
import Items from "./Items";

const ItemList =({products}) => {
  console.log(products);

  return (
      <>
            {products.map((product) => {
              return(
                <Items key = {product.id} product = {product} />
              )
            })}
      </>
  );
}

export default ItemList;
