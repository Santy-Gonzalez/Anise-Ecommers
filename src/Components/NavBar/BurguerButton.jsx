import React from 'react'
import "./styleNavBar.css"

function BurguerButton(props) {
  return (
    <div className='backburguer'>
      <div className='burguericon'>
        <div onClick={props.handleClick} 
            className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default BurguerButton