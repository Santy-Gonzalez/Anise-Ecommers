import React, {useContext, useState} from 'react'
import { CartContext } from '../../Context/CartContextProvider';
import Cart from './Cart'

const CartContainer = () => {

  const {cart} = useContext(CartContext);
  let { clear } = useContext (CartContext);
  let { removeItem } = useContext (CartContext);
  let { qtyTotal } = useContext (CartContext);

  return (
    <>
      <Cart cart={cart} clear={clear} removeItem={removeItem} qtyTotal={qtyTotal} />
    </>
  )
}

export default CartContainer
