import React, {useState} from "react";
import {Button} from '@material-ui/core'

 const ItemCount = ({initial,stock,addCart,onAdd}) => {
    
        const [quantity, setQuantity] = useState(initial);

    
        const handleIncrease = () => {
            if (quantity < stock){
                setQuantity(quantity + 1);
            }
        };
    
        const handleDecrease = () => {
            if (quantity > initial) {
                setQuantity(quantity - 1)
            }
        }

  return (
    <>
        <div className="counter">
            <div className="counter_">{quantity}</div>
            <Button variant='contained' color='inherit' className="increase" onClick={handleIncrease}>+</Button>
            <Button variant='contained' color='inherit' className="decrement" onClick={handleDecrease}>-</Button>
            <Button variant='contained' color='inherit' className="reset" onClick={() =>addCart(onAdd(quantity),quantity)}>Añadir al Carrito</Button>
        </div>
    </>
  );
}
export default ItemCount;

