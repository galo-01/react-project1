import React from 'react';

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
          <a href='https://www.youtube.com/watch?v=zpiv39ELDjk&ab_channel=HUDSON7' className='nav-link'>Inicio</a>
        </li> 
        <li>
          <a href='https://www.youtube.com/watch?v=zpiv39ELDjk&ab_channel=HUDSON7' className='nav-link'>Tienda</a>
        </li> 
        <li>
          <a href='https://www.youtube.com/watch?v=zpiv39ELDjk&ab_channel=HUDSON7' className='nav-link'>Plantas</a>
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