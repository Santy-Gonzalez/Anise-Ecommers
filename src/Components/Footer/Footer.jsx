import React from 'react'
import { Link } from "react-router-dom";
import "./styleFooter.css"

const Footer = () => {

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

    </>
  )
}

export default Footer
