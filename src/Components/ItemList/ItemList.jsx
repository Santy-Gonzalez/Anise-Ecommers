import React from "react";
import Items from "./Items";
import {Grid} from '@material-ui/core'

const ItemList =({products}) => {

  return (
      <>
        <Grid container spacing={{xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((product) => {
              return(
                <Grid item xs={12} md={4} sm={6} key = {product.id}>
                  <Items product = {product} />
                </Grid>
              )
            })}
      </Grid>
      </>
  );
}

export default ItemList;
