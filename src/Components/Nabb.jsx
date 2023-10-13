import React, { useState } from "react";



import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Nabb = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          
           <h1 className="logo_he">
            Er_Sagar75
           </h1>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/Overview">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/Features">Features</NavLink>
            </li>
             
            <li>
              <NavLink to="/Belog">Services</NavLink>
            </li>
             <li>
              <NavLink to="/login">log in</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
      
           

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <button type="submit" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

       
    </>
  );
};

export default Nabb;