import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';



export default function Navbar() {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const closeMobileMenu = () => setClick(false);
const handleClick = () => setClick(!click);

const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false);
  
  } else {
    setButton(true);
  }
};

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
  <nav className="navbar">
    <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <i className="fa fa-home fa-fw" aria-hidden="true"></i>

        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} ></i>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <li className='nav-item'>
              <Link 
                to='/' 
                className='nav-links'
                onClick={closeMobileMenu}>
               Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link 
                to='/TopicsPage' 
                className='nav-links'
                onClick={closeMobileMenu}>
                Discussion Topics
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/ResourcesPage'
                className='nav-links' 
                onClick={closeMobileMenu}>
                Resources
              </Link>
            </li>

        </ul>
     

    </div>
  </nav>
</>
  )
}
