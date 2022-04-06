import React from 'react'
import ItemCount from "../ItemList/ItemCount";

const ItemDetailContainer = (prid) => {
  return (
    <>
          <div className={prid.cood}>
            <div className={prid.keyy}></div>
            <div className='name__'><div>{prid.naame}</div></div>
            <div className='image__'> <img src={prid.immage} alt="ring2" /></div>
            <div className='price__'><div><div>{prid.pricee}</div></div></div>
            <div className='details__'><div>{prid.details}</div></div>
            <div className='countador'><ItemCount initial = {1} stock = {5}/></div>
          </div>
    </>
  )
}

export default ItemDetailContainer;
