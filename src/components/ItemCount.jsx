import React, {useState} from "react";

const useCounter = ({initial,stock}) =>{
    const [counter, setCounter] = useState(initial);

    const handleIncrease = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    };

    const handleDecrease = () => {
        if (counter > useState) {
            setCounter(counter - 1)
        }
    }

    const handleReset = () => {
        const reset = () => setCounter(1);
    }

    return{
        counter,
        handleIncrease,
        handleDecrease,
        handleReset,
        stock,

    } 

}


export default function ItemCount() {
    const {counter, handleIncrease, handleDecrease,handleReset,stock} = useCounter();

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
