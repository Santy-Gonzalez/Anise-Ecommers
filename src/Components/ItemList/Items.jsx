import React from 'react'
import ItemCount from "./ItemCount";

const Items = (prod) => {

  return (
      <>
        <div className={prod.cod}>

          <div className='imagee'>
            <img src={prod.image} alt="ring" />
          </div>

          <div className='name'>
            <div>{prod.name}</div>
          </div>

          <div className='price'>
            <div>{prod.price}</div>
          </div>

          <div className="count">
            <ItemCount initial = {1} stock = {5}/>
          </div>

        </div>
      </>
  )
}

export default Items;
