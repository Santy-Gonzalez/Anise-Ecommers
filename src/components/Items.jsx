import React from 'react'
import ItemCount from "./ItemCount";

const Items = (prod) => {

  return (
      <>
      <div className={prod.key}>
            <div className="image">
              <img src={prod.image} alt="ring" />
            </div>
            <div>
                <p>{prod.name}</p>
            </div>
            <div>
                <p>{prod.price}</p>
            </div>
            <div className="count">
              <ItemCount initial = {1} stock = {5}/>
            </div>
      </div>
      </>
  )
}

export default Items;
