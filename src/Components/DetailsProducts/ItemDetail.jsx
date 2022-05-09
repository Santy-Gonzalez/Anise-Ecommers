import React, {useContext, useEffect ,useState} from 'react'
import {Button} from '@material-ui/core'
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
          <p>{details.nombre}</p>
        </div>
        <div data-aos="zoom-in" className='detailprice'>
          <p className='detailsprice'>€ {details.precio}.00</p> 
        </div>
        <div data-aos="zoom-in" className='details'>
          <p className='detaildetails'>{details.detail}</p> 
        </div>
        <div data-aos="zoom-in" className='amountcontainer'>
        <p className='amount'>Cantidad:</p>
        {click ? <div className='MainButtonsDetail'> <div className='centerDetail'><Link to={"/cart"}> <Button variant='contained' color='success'> Ir al Carrito </Button> </Link></div><Button variant='contained' color='success' onClick={() => handleClick()}>Seguir comprando</Button></div> : <ItemCount initial = {1} stock = {5} addCart={addCart} onAdd={onAdd}/>}
        </div>
    </div>
    </>
  )
}

export default ItemDetail;
