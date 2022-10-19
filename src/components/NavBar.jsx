import React from 'react';
import {NavLink} from 'react-router-dom';

const logo = require('../img/logo4.png')


// <></>


function NavBar({children}) {
  return (
    <div className='navbar'>
      <div className='nav-title'>
        <img className='nav-logo' src={logo}  alt='logo'/>
        <h1 className='nav-name'>Reactive Shop</h1>
      </div>  

      <ul className='nav-links'>
        <li>
          <NavLink exact className='nav-link'  to={'/home'}>Inicio</NavLink>
        </li> 
        <li>
          <NavLink exact className='nav-link' to={'/store'}>Tienda</NavLink>
        </li> 
        <li>
          <a href='https://www.youtube.com/watch?v=zpiv39ELDjk&ab_channel=HUDSON7' className='nav-link'>Más</a>
        </li> 
      </ul>

      <div className='nav-left'>
        <div className='cart'>
          {children}
        </div>
        <a href='https://www.youtube.com/watch?v=zpiv39ELDjk&ab_channel=HUDSON7' className='boton' >Log In</a>
      </div>

    </div>
  );
}

export default NavBar;