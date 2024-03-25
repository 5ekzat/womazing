import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from "../../assets/Logo.png"
import TEL from "../../assets/tel.png"
import BAG from "../../assets/bag.png"

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-logo">
          <img src={LOGO} alt="" />
        </div>
        <div className="nav-links">
           <NavLink to='/' className='NavLink'>Главная</NavLink>
           <NavLink to='/shop' className='NavLink'>Магазин</NavLink>
           <NavLink to='/about' className='NavLink'>О бренде</NavLink>
           <NavLink to='/contacts' className='NavLink'>Контакты</NavLink>
        </div>
        <div className="nav-info">
          <img src={TEL} alt="" />
          <span>+7 (495) 823-54-12</span>
          <img src={BAG} alt="" />
        </div>
      </nav>
    </div>
  )
}

export default Header