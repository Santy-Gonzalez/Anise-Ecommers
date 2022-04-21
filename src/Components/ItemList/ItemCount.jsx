import React, {useState} from "react";

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
            <button className="increase" onClick={handleIncrease}>+</button>
            <button className="decrement" onClick={handleDecrease}>-</button>
            <button className="reset" onClick={() =>addCart(onAdd(quantity),quantity)}>Añadir al Carrito</button>
        </div>
    </>
  );
}
export default ItemCount;
