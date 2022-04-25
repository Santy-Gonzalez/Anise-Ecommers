import React from 'react'
import {Link} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
        <Item> 

          <div>

            <Link to={`/item/${product.id}`}>
              <div className='imagee'>
                <img src={product.imagen} alt="ring" />
              </div>
            </Link>

              <div className='name'>
                <div>{product.nombre}</div>
              </div>

              <div className='price'>
                <div>€ {product.precio}.00</div>
              </div>

            </div>

          </Item>
                
      </>
  )
}

export default Items;
