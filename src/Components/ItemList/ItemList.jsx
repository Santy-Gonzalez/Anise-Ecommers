import React from "react";
import Items from "./Items";
import {Grid} from '@material-ui/core'

const ItemList =({products}) => {

  return (
      <>
      <div>
        <Grid container column-spacing={{xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
              {products.map((product) => {
                return(
                  <Grid data-aos="fade-up" item xs={12} md={4} sm={6} key = {product.id}>
                    <Items product = {product} />
                  </Grid>
                )
              })}
        </Grid>
      </div>
      <div data-aos="zoom-in">
        <div className="flexItemList">
          <p>Envío gratuito en compras de más de 100 €</p>
        </div>
      </div>
      </>
  );
}

export default ItemList;
