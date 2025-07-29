import React from "react";
import "../styles/Navbar.css"; // Assuming you have a CSS file for styles

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="font-bold text-2xl text-indigo-700 tracking-tight">
          HuntlyTech
        </div>
        {/* Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="hover:text-indigo-600 font-medium">Home</a>
          <a href="#aboutus" className="hover:text-indigo-600 font-medium">About Us</a>
          <a href="#services" className="hover:text-indigo-600 font-medium">Services</a>
          <a href="#portfolio" className="hover:text-indigo-600 font-medium">Portfolio</a>
          <a href="#careers" className="hover:text-indigo-600 font-medium">Careers</a>
          <a href="#blog" className="hover:text-indigo-600 font-medium">Blog</a>
          <a href="#contact" className="hover:text-indigo-600 font-medium">Contact</a>
        </div>
        {/* Actions */}
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-indigo-600 rounded text-indigo-600 hover:bg-indigo-50 transition font-semibold">
            Sign In
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded font-semibold shadow hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;