import React from "react";
import Items from "./Items";

const ItemList =({products}) => {

  return (
      <>
        <div>
            {products.map((product) => {
                <Items key = {product.id} product = {product} />
            })}
        </div>
      </>
  );
}

export default ItemList;
