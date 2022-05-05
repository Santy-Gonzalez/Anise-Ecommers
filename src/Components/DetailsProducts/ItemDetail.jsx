import React, {useContext, useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContextProvider';
import ItemCount from '../ItemList/ItemCount';
import Aos from "aos";
import "aos/dist/aos.css";
import "./styleDetails.css";


const ItemDetail = ({details}) => {

  useEffect(()=>{
    Aos.init({duration:1500});
},[])

    const [number, setNumber] = useState(0);
    const [click, setClick] = useState(false);
    const cartContext = useContext(CartContext);
    const {cart, addItem} = cartContext;
    let { clear } = useContext (CartContext);

    const addCart = (number) =>{
      setNumber(number);
      setClick(true);
    }

    const handleClick = () => {
      setClick(false);
    }

    const onAdd = (quantity) =>{
      addItem(details, quantity);
    }

  return (
    <>
    <div className='detailcontainer'>
        <div data-aos="flip-left" className='detailimage'>
          <img src={details.imagen} alt="g" />
        </div>
        <div data-aos="zoom-in" className='detailname'>
          {details.nombre}
        </div>
        <div data-aos="zoom-in" className='detailprice'>
          <p className='detailsprice'>€ {details.precio}.00</p> 
        </div>
        <div data-aos="zoom-in" className='details'>
          <p className='detaildetails'>{details.detail}</p> 
        </div>
        <div data-aos="zoom-in" className='amountcontainer'>
        <p className='amount'>Cantidad:</p>
        {click ? <div> <Link to={"/cart"}> <button> Ir al Carrito </button> </Link> <button onClick={() => handleClick()}>Seguir comprando</button> <button onClick={() => clear()}> Limpiar carro</button> </div> : <ItemCount initial = {1} stock = {5} addCart={addCart} onAdd={onAdd}/>}
        </div>
    </div>
    </>
  )
}

export default ItemDetail;
