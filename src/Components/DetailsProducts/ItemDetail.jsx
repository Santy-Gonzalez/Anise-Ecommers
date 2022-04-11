import React, {useEffect} from 'react'
import "./styleDetails.css"

const ItemDetail = ({details}) => {



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
          {details.precio}
        </div>
        <div className='details'>
          {details.details}
        </div>
        <div className='amountcontainer'>
          <p className='amount'>Cantidad:</p>
          <div className='detailsamount'>
            <input className='adder' aria-label='Amount' type="number" />
          </div>
        </div>
        <div className='adddetails'>
          <button className='add' type='input'>Agregar al carrito</button>
        </div>
    </div>
    </>
  )
}

export default ItemDetail;
