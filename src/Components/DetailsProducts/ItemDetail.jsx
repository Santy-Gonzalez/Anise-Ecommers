import React from 'react'

const ItemDetail = ({imagen , cod , nombre , precio , details}) => {

  return (
    <>
      <div>
        <img src={imagen} alt="g" />
      </div>
      <div>
        {cod}
      </div>
      <div>
        {nombre}
      </div>
      <div>
        {precio}
      </div>
      <div>
        {details}
      </div>
    </>
  )
}
export default ItemDetail;
