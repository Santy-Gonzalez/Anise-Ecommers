import React from 'react'
import {Grid, Box} from '@material-ui/core'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ItemCount from '../ItemList/ItemCount'

const Items = ({product}) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#fff5fa',
    padding: theme.spacing(1),
    textAlign: 'center',    
    textDecoration: 'none',
    boxShadow:'none',
    paddingTop:'50px',
  }));

  return (
      <>
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} md={4} sm={6} >
                    <Item>              
                      <div>
                          <div className='imagee'>
                            <img src={product.image} alt="ring" />
                          </div>

                          <div className='name'>
                            <div>{product.name}</div>
                          </div>

                          <div className='price'>
                            <div>{product.price}</div>
                          </div>

                          <div className="count">
                            <ItemCount initial = {1} stock = {5}/>
                          </div>
                      </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
      </>
  )
}

export default Items;