import React from 'react'
import "./styleDetails.css"


const ItemDetail = ({imagen , nombre , precio , details}) => {

  return (
    <>
    <div className='detailcontainer'>
        <div className='detailimage'>
          <img src={imagen} alt="g" />
        </div>
        <div className='detailname'>
          {nombre}
        </div>
        <div className='detailprice'>
          {precio}
        </div>
        <div className='details'>
          {details}
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
