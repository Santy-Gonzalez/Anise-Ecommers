import React, { useState } from 'react'
import BurguerButton from './BurguerButton'
import {Link} from 'react-router-dom';
import CartWidget from "./CartWidget";
import "./styleNavBar.css";

function NavBarMobile() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  return (
    <>
    <div className='back'>
      <div className='navcontainer'>
        <div className='tittle__'>
          <Link className='tittle___' to={`/`}><p>Anise</p></Link>
        </div>
            <div className={`links ${clicked ? 'active' : ''}`}>
            <Link onClick={handleClick} to={`/`}>Inicio</Link>
            <Link onClick={handleClick} to={`/ItemListContainer`}>Tienda</Link>
            <Link onClick={handleClick} to={`/Contact`}>Contacto</Link>
            <Link onClick={handleClick} to={`/About`}>Acerca de</Link>
            </div>
             <span className='cart'><CartWidget/></span>
            <div className='burguer'>
              <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <div className='burguerinitial'>
              {<div className={`initial ${clicked ? ' active' : ''}`}></div>}      
            </div>
      </div>
    </div>
    </>
  )
}

export default NavBarMobile;
