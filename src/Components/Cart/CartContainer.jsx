import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContextProvider';
import {Link} from 'react-router-dom';
import Cart from './Cart'

const CartContainer = () => {

  const {cart} = useContext(CartContext);

  return (
    <>
      <Cart cart={cart}/>
    </>
  )
}

export default CartContainer
