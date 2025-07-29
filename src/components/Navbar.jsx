import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="nav-inner">
        {/* Logo */}
        <div className="font-bold">HuntlyTech</div>

        {/* Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className="menu">
          <a href="#hero">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop Buttons */}
        <div className="actions">
          <button className="btn border">Sign In</button>
          <button className="btn bg-indigo-600">Get Started</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#aboutus" onClick={closeMenu}>About Us</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#careers" onClick={closeMenu}>Careers</a>
        <a href="#blog" onClick={closeMenu}>Blog</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
