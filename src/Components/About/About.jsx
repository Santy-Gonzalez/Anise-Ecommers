import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer';
import "./styleAbout.css";

const About = ({rings, ringsTwo, ringsThree}) => {
  return (
    <>
        <div className='gridAbout'>
            <div className='nature'>
                <p>Inspirado en la naturaleza</p>
            </div>  
            <div className='friends'>
                <div>
                    <p>Las amigas Natasha Drew y Maya Rahim fundaron Anise en 2014 con su enfoque sorprendentemente direccional, sostenible y muy personal para crear joyería fina.</p>
                </div>
            </div>
            <div className='collectionsAbout'>
                <p>Todas sus colecciones incluyen anillos simples y atractivos, así como colgantes con texturas creadas a mano y fascinantes líneas limpias. Con un compromiso hacia la sostenibilidad, todas las piezas se hacen localmente con oro de 18k y plata de ley 925 obtenidos de fuentes responsables</p>
            </div>
            <div className='imageAbout'>
                <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228694522-K2JNNFPFJUDX1PEIPBXV/2905696.jpg?format=750w" alt="ring" />
            </div>
        </div>
        <div className='backAbout'>
            <div className='focus'>
                <p>Nuestro enfoque</p>
            </div>
            <div className='gridAboutMain'>
                <div>
                    <div className='imageStone'>
                        <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228673895-TWEFIDR3BAQ2LSHFI9GV/1692031-A.jpg?format=750w" alt="stone" />
                    </div>
                    <div className='sustainability'>
                        <p>Sostenibilidad</p>
                    </div>
                </div>
                <div>
                    <div className='imageRing'>
                        <img src="https://images.squarespace-cdn.com/content/v1/5f524ac57dc3b76ad5060050/1599228675963-AE5JIYCVAZWTHE4EQIJH/SQSP_Jewelry_Lifestyle_4_8075.jpg?format=1000w" alt="ring" />
                    </div>
                    <div className='localProduct'>
                        <p>Producto local</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='BackAbout'>
            <div className='buyNowAbout'>
                <p>Comprar ahora</p>
            </div>

                <div className='cardsAbout'>

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

                    <div className='cardMainThree'>

                        <Link to={`/item/${ringsThree.id}`}>
                            <div className='imagee'>
                                <img src={ringsThree.imagen} alt="ringsThree" />
                            </div>
                        </Link>

                        <div className='namemainThree'>
                            <div>{ringsThree.nombre}</div>
                        </div>

                        <div className='pricemainThree'>
                            <div>€ {ringsThree.precio}.00</div>
                        </div>

                    </div>
                </div>
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
                <hr />
                <div>
                    <Footer/>
                </div>
        </div>
    </>
  )
}

export default About
