import React, {createContext, useState} from 'react'

export const CartContext = createContext(null);

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = ((item , quantity) =>{
      let product = {...item, quantity};
      setCart([...cart, product]);
      console.log(cart);
      console.log(product);
    });


    const removeItem = ((item , quantity) =>{

    });

    const clear = ((item , quantity) =>{
        setCart([])
    })

  return (
    <>
        <CartContext.Provider value={{cart ,setCart,addItem,removeItem,clear}}>
            {children}
        </CartContext.Provider>
    </>
  )
}

export default CartContextProvider;
