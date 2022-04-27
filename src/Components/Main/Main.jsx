import React from 'react'
import "./stylemain.css"
import {Link} from 'react-router-dom'

const Main = ({rings}) => {
    console.log(rings);

  return (
      <>
        <div className={rings.cod}>
        
            <div className='imagee'>
                <img src={rings.imagen} alt="rings" />
            </div>

            <div className='name'>
                <div>{rings.nombre}</div>
            </div>

            <div className='price'>
                <div>{rings.precio}</div>
            </div>

      </div>

       <div className='back'>
                <div className='flexmain'>
                    <div className='picturemain'>
                        <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228682136-CXPBR0YQWEZQ6RC4AXC8/Jewelry_Lifestyle_3_7943-1.jpg?format=1500w" alt="imagemain" />
                    </div>
                        <div className='absolutemain'>
                            <div className='spacenew'>
                                <strong><b>NUEVA COLECCIÓN</b></strong>
                            </div>
                            <div className='spacenew_'>
                                <span>Universal - <Link to={`/ItemListContainer`}><b className='spacenew_'>Comprar Ahora</b></Link></span>
                            </div>
                        </div>    
                </div>
            </div>
            <div className='back_'>
                <div className='gridmain'>
                    <div className='textmain'>
                        <p>Creamos joyería moderna en oro y en plata de ley y nos especializamos en diseños atemporales, producción local y materiales de comercio responsable.</p>
                    </div>
                    <div className='mainbutton'>
                        <button className='buttonmain'>
                            Nuestra historia
                        </button>
                    </div>
                </div>
                <div className='imagemain'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228615690-IWLYLRH1JSRWL9RK7LFM/2906547.jpg?format=750w" alt="imagemain2" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228614947-GVWQ7TYW9XRWH3FSCISJ/SQSP_Jewelry_Lifestyle_1_7571.jpg?format=1500w" alt="imagemain2" />
                </div>
                <div className='maingrid'>
                    <div>
                        <h1> Lujo esencial</h1>
                    </div>
                    <div>
                        <button className='buyring'>Comprar anillos</button>
                    </div>
                    
                </div>
            </div>
      </>   
  )
}

export default Main
