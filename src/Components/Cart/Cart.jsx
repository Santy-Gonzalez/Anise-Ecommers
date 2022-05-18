import React, {useContext, useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { CartContext } from "../../Context/CartContextProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import "./stylesCart.css";

export default function Cart({cart,clear,removeItem,qtyTotal}) {

  const [enabled, setEnabled] = useState(false);

  useEffect(()=>{
    Aos.init({duration:1500});
},[])

  useEffect(()=>{
    if (qtyTotal !== 0) {
      setEnabled(true);
    }else{
      setEnabled(false);
    }
  },[qtyTotal])

  const {price} = useContext(CartContext);

  return (
    <>
      {enabled ? 
          <div className='mainCartProducts'>
              <div className='productsCartCart'>
                  <p className='tittleCart'>Productos del carrito</p>
              </div>
              <div className='dataCartProducts'>
                  {cart.map((col) => (
                    <div className='MainGridCart' key={col.imagen}>
                      <div className='FirstGridCart'>
                        <div className='generalMainCart'>
                          <div className='gridNameImgCart'>
                            <div className='imageProductCart'>
                              <img src={col.imagen} alt="Product" />
                            </div>
                            <div className='gridName'>
                              <p className='NameProductCart'>{col.nombre}</p>
                            </div>
                          </div>
                          <div className='quantityCart'>
                            <div className='gridCart'>
                              <div className='addCart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                              </div> 
                              <div className='numberCart'>
                                {col.quantity}
                              </div> 
                              <div className='discountCart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>
                              </div>
                            </div>
                            <div className='flexCart'>
                                <div className='priceCart'>€ {col.quantity * col.precio}.00</div>
                                <div className='cleanCart' onClick={() =>{ removeItem(col.id)}} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                      <div className='SecondGridCart'>
                        <div className='totalSecondGrid'>
                          <p>Total</p>
                        </div>
                        <div className='priceSecondGrid'>
                          <p>€ {price}.00</p>
                        </div>
                        <div className='gridAddSecondGrid'>
                          <div className='gridAdd'> <div className='buttonAdd'> <Link to={"/ItemListContainer"}><Button type='button' variant='contained' color='default'>Añadir mas productos</Button></Link></div> <div className='checkoutCart'><Link to={"/checkout"}> <Button  type='button' variant='contained' color='default'>Terminar Compra</Button> </Link></div> <div className='deleteCart' onClick={() =>{ clear()}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></div> </div>
                        </div>
                      </div>
              </div>
          </div>
          :
          <div className='gridCartEmpty'>
            <div data-aos="zoom-in" className='cartempty'>
              <p>Carrito de compra</p>
            </div>
            <div data-aos="zoom-in" className='emptyCart'>
              <p>No tienes nada en tu carrito de compras.</p>
            </div>
            <div data-aos="zoom-in" className='buttonAddEmpty'> 
              <Link to={"/ItemListContainer"}><Button type='button' variant='contained' color='default'>Seguir comprando</Button></Link>
            </div>
          </div>}
    </>
  );
}
