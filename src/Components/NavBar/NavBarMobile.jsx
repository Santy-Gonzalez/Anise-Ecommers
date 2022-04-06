import React, { useState } from 'react'
import BurguerButton from './BurguerButton'
import CartWidget from "./CartWidget";

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
              <a className='tittle___' href='#H'><p>Anise</p></a>
        </div>
            <div className={`links ${clicked ? 'active' : ''}`}>
              <a onClick={handleClick} href="#h">Home</a>
              <a onClick={handleClick} href="#h">Shop</a>
              <a onClick={handleClick} href="#h">About</a>
              <a onClick={handleClick} href="#h">Contact</a>
              <a onClick={handleClick} href="#h">Blog</a>
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