import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Items from "./Items";
import {Grid, Box} from '@material-ui/core'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const ItemList =() => {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor:'#fff5fa',
        padding: theme.spacing(1),
        textAlign: 'center',    
        textDecoration: 'none',
        boxShadow:'none',
        paddingTop:'50px',
      }));

    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch("/public/Products.json")
        .then(response => response.json())
        .catch(error=>{console.log(error)})
        .then(data => {
            setProducts(data);
        })
    }, []);

  return (
      <>
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {product.map((products) => {
                    return (
                        <Grid item xs={12} md={4} sm={6} >
                            <Item>              
                                    <Items
                                        key = {products.id}
                                        cod = {products.cod}
                                        name = {products.nombre}
                                        image = {products.imagen}
                                        price = {products.precio}
                                    />
                            </Item>
                        </Grid>
                        )
                    })}
            </Grid>
        </Box>
      </>
  );
}

export default ItemList;
