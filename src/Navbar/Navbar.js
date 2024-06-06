import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import img from "./img.jpeg";

const Navbar = () => {
 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/AI5" className="nav__logo">
        <img src={img} alt="logo" style={{width:"80px", height:"80px"}}/>
          Alimentação Infantil
       </NavLink>

       <div
         className={`nav__menu ${showMenu ? "show-menu" : ""}`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/AI5" className="nav__link"  onClick={closeMenuOnMobile}>
               Home
             </NavLink>
           </li>
          
           <li className="nav__item">
             <NavLink
               to="/about-us"
               className="nav__link"
                onClick={closeMenuOnMobile}
             >
               Sobre Nós
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/dicas" className="nav__link2 nav__cta">
               Dicas
             </NavLink>
           </li>
         </ul>
         <div className="nav__close" id="nav-close" onClick={()=>{toggleMenu()}}>
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle" onClick={()=>{toggleMenu()}}>
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navbar;