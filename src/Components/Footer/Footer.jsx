import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import "./styleFooter.css"
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:1500});
},[])

  const itemsMenu = [
    {
      title: "Tienda",
      url: `/ItemListContainer`,
    },
    {
      title: "Instagram",
      url: `/instagram`,
    },

    {
      title: "Contacto",
      url: `/Contact`,
    },    
    {
      title: "Tallas",
      url: `/Tallas`,
    },
    {
      title: "Acerca de",
      url: `/About`,
    },
    {
      title: "Pinterest",
      url: `/Pinterest`,
    },
  ];

  return (
    <>
    <footer data-aos="zoom-in">
      <hr />
        <div className='gridFooter'>
          <div className='titleGrid'>
            <p className='tittleFooter'>Anise</p>
      
            <p className='create'>Creado por Santiago Gonzalez</p>
          </div>
          <div>
          <ul className='linksFooter'>
          {itemsMenu.map((item) => (        
                <li key={item.title}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
          ))}
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
