import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemList/ItemCount';
import "./styleDetails.css"

const ItemDetail = ({details}) => {

    const [number, setNumber] = useState(0);
    const [click, setClick] = useState(false)

    const addCart = (amount) =>{
      setNumber(amount);
      setClick(true);
    }

    const handleClick = () => {
      setClick(false);
    }

  return (
    <>
    <div className='detailcontainer'>
        <div className='detailimage'>
          <img src={details.imagen} alt="g" />
        </div>
        <div className='detailname'>
          {details.nombre}
        </div>
        <div className='detailprice'>
          <p className='detailsprice'>{details.precio}</p> 
        </div>
        <div className='details'>
          <p className='detaildetails'>{details.detail}</p> 
        </div>
        <div className='amountcontainer'>
        <p className='amount'>Cantidad:</p>
        {click ? <div> <Link to={"/cart"}> <button> Ir al Carrito </button> </Link> <button onClick={() => handleClick()}>Seguir comprando</button> </div> : <ItemCount initial = {1} stock = {5} addCart={addCart}/>}
        </div>
    </div>
    </>
  )
}

export default ItemDetail;
