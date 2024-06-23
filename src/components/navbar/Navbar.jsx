import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {

  const [ mobileMenuOpen , setMobileMenuOpen ] = useState(false);

  return (
    <nav>
      <div className="left">
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>AnnEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">Sign Up</a>
        <div className="menuIcon">
          <img 
          src="/menu.png" 
          alt="" 
          onClick={()=> setMobileMenuOpen((prev) => !prev)}
          />
        </div>
        <div className={ mobileMenuOpen ? "menu active" : "menu"}> 
        <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>

        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
