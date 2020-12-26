import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
// closeMobileMenu it is go to that link and then close the mobile 
//navbar (or nav-menu) as well 

import Dropdown from '../Dropdown/Dropdown';
import './Navbar.css';

function Navbar() {
  const [click,setClick] = useState(false);
  const [dropdown,setDropown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>setClick(!click);

  const onMouseEnter = () =>{
   if(window.innerWidth< 960){
     setDropown(true)
   }
   else{
     setDropown(true);
   }
  };

  const onMouseLeave = () =>{
    if(window.innerWidth < 960){
      setDropown(false)
    }
    else{
      setDropown(false);
    }
   };

  return (
    <>
      <nav className='navbar'>
         <div className='menu-icon' onClick={handleClick}>
            <i className={ click ? 'fas fa-times':'fas fa-bars'}></i>
          </div>
        {/* <div className='navbar-container'> */}
          <NavLink to='/' className='navbar-logo'>
            EPIC
            <i class='fab fa-firstdraft' />
          </NavLink>
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={ click ? 'fas fa-times':'fas fa-bars'}></i>
          </div> */}
        {/* It is an navbar of items that u see on click */}
       <ul className={ click ? 'nav-menu active':'nav-menu'}>
         <li className='nav-item'>
           <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
         </li>

         {/* <li className='nav-item'>
           <NavLink to='/add/contact' className='nav-links' onClick={closeMobileMenu}>Add Contact</NavLink>
         </li> */}

         <li className='nav-item'>
           <NavLink to='/signin' className='nav-links' onClick={closeMobileMenu}>Sign In</NavLink>
         </li>

         <li className='nav-item'
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         >
           <NavLink to='/user/profile' className='nav-links' onClick={closeMobileMenu}>
             Profile <i className='fas fa-caret-down'/>
           </NavLink>
            {
              dropdown && <Dropdown />
            }
         </li>

         <li className='nav-item'>
           <NavLink to='/signup' className='nav-links' onClick={closeMobileMenu}>Sign Up</NavLink>
         </li>

         <li className='nav-item'>
           <NavLink to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact Us</NavLink>
         </li>
       </ul>
       {/* <Button/> */}
    {/* </div>   */}
      </nav>
    </>
  )
}

export default Navbar
