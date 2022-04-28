import React from 'react'
import "./stylemain.css"
import {Link} from 'react-router-dom'

const Main = ({rings, ringsTwo}) => {

  return (
      <>

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
                    <div className='luxurymain'>
                        <div className='luxuryMain'>
                            <p className='luxury'> Lujo esencial</p>
                        </div>
                        <div className='buyringMain'>
                            <Link to={"/ItemListContainer"}><button className='buyring'>Comprar anillos</button></Link>
                        </div>
                    </div>

                  <div className='cardsMain'>

                    <div className='cardMainOne'>

                        <Link to={`/item/${rings.id}`}>
                            <div className='imagee'>
                                <img src={rings.imagen} alt="rings" />
                            </div>
                        </Link>

                        <div className='namemain'>
                            <div>{rings.nombre}</div>
                        </div>

                        <div className='pricemain'>
                            <div>€ {rings.precio}.00</div>
                        </div>

                    </div>
                    
                    <div className='cardMainTwo'>

                        <Link to={`/item/${ringsTwo.id}`}>
                            <div className='imagee'>
                                <img src={ringsTwo.imagen} alt="ringsTwo" />
                            </div>
                        </Link>

                        <div className='namemainTwo'>
                            <div>{ringsTwo.nombre}</div>
                        </div>

                        <div className='pricemainTwo'>
                            <div>€ {ringsTwo.precio}.00</div>
                        </div>

                    </div>
                  </div>
                    
                </div>
                <hr />
                <div className='gridSubscribe'>
                    <div className='bulletinmain'>
                        <div className='bulletin'>
                            <p className='news'>Boletín de noticias</p>
                        </div>
                        <div className='collections'>
                            <p className='releases'>Entérate de los lanzamientos de nuevas colecciones,</p>
                            <p className='releases'>ofertas especiales y otras novedades antes que nadie.</p>
                        </div>
                    </div>
                    <div className='subscribe'>
                        <div className='center'>
                            <input type="email" placeholder='Correo Electrónico' name="CorreoElectrónico" id="" />
                        </div>
                        <div className='center_'>
                            <button type='submit'> Suscribirse </button>
                        </div>
                    </div>

                </div>

            </div>
            
      </>   
  )
}

export default Main
