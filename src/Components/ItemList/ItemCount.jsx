import React, {useState} from "react";

 const ItemCount = ({initial,stock}) => {
    
        const [counter, setCounter] = useState(initial);
    
        const handleIncrease = () => {
            if (counter < stock){
                setCounter(counter + 1);
            }
        };
    
        const handleDecrease = () => {
            if (counter > initial) {
                setCounter(counter - 1)
            }
        }
    
        const handleReset = () => {
            setCounter(1);
        }

  return (
    <>
        <div className="counter">
            <div className="counter_">{counter}</div>
            <button className="increase" onClick={handleIncrease}>+</button>
            <button className="decrement" onClick={handleDecrease}>-</button>
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    </>
  );
}
export default ItemCount;