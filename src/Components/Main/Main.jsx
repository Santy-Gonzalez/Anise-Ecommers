import React from 'react'
import "./stylemain.css"
import {Link} from 'react-router-dom'

const Main = () => {
  return (
      <>
            <div className='back'>
                <div className='flexmain'>
                    <div className='picturemain'>
                        <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228682136-CXPBR0YQWEZQ6RC4AXC8/Jewelry_Lifestyle_3_7943-1.jpg?format=1500w" alt="" />
                    </div>
                        <div className='absolutemain'>
                            <div className='spacenew'>
                                <strong><p>NUEVA COLECCIÓN</p></strong>
                            </div>
                            <div className='spacenew_'>
                                <span>Universal - <Link to={/ItemListContainer}><b>Comprar Ahora</b></Link>  </span>
                            </div>
                        </div>    
                </div>
            </div>

      </>
  )
}

export default Main
