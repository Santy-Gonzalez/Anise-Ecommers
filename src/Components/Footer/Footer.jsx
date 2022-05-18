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
      title: "Pinterest",
      url: `https://ar.pinterest.com/`,
    },

    {
      title: "Contacto",
      url: `/Contact`,
    },    
    {
      title: "Instagram",
      url: `https://www.instagram.com/santi_gonzalez17/`,
    },
    {
      title: "Acerca de",
      url: `/About`,
    },
    {
      title: "WhatsApp",
      url: `https://www.whatsapp.com/`,
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
              <div key={item.title}>
                <li>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              </div>
          ))}
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
