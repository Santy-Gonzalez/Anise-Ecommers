import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext(null);

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [qtyTotal, setQtyTotal] = useState(0);
  const [price, setPriceTotal] = useState(0);
  const [individual, setIndividual] = useState(0);

  const priceProduct = () => setIndividual(cart.reduce((ind, item) => (ind + item.precio), 0));

  useEffect(() =>{
    priceProduct();
  }, [cart]);

  const priceTotal = () => setPriceTotal(cart.reduce((amount,item) => (item.precio + amount), 0));
  
  useEffect(() =>{
    priceTotal();
  }, [cart]);
  
  const quantityTotal = () => setQtyTotal(cart.reduce((total, item) => (total += item.quantity), 0));
  
  useEffect(() =>{
    quantityTotal();
  }, [cart]);



  
  const addItem = ((item , quantity) =>{

    if (cart.some(el => el.id === item.id)) {

     let index = cart.findIndex(el => el.id === item.id);
     let product = cart[index];
     product.quantity = product.quantity + quantity;

      const newCart = [...cart];
      newCart.splice(index, 1, product);

      setCart([...newCart]);

    } else{
      let product = {...item, quantity};
      setCart([...cart, product]);
    }
  });
  
    const removeItem = (( id ) =>{
      
      const newCart = [...cart];
      let index = newCart.findIndex(el => el.id===id);
      newCart.splice(index, 1);

      setCart((newCart));
    });

    const addProduct = ((item , quantity)=>{
      if (cart.some(el => el.id === item.id)) {

        let index = cart.findIndex(el => el.id === item.id);
        let product = cart[index];
        product.quantity = product.quantity + quantity;
   
         const newCart = [...cart];
         newCart.splice(index, 1, product);
   
         setCart([...newCart]);
   
       } else{
         let product = {...item, quantity};
         setCart([...cart, product]);
       }
    })

    const clear = ((item , quantity) =>{
        setCart([])
    });

  return (
    <>
        <CartContext.Provider value={{individual,priceProduct,price,qtyTotal,cart,setCart,addItem,removeItem,addProduct,clear}}>
            {children}
        </CartContext.Provider>
    </>
  )
}

export default CartContextProvider;
  