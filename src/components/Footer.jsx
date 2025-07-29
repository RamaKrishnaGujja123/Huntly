import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand & Newsletter */}
        <div className="footer-brand">
          <h3 className="footer-title">HuntlyTech</h3>
          <p className="footer-tagline">
            Transforming recruitment with AI-powered solutions.
          </p>

          {/* Newsletter */}
          <form className="footer-newsletter">
            <input
              type="email"
              placeholder="Your email address"
              className="footer-input"
            />
            <button type="submit" className="footer-button">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#services">AI Recruitment</a></li>
              <li><a href="#services">Executive Search</a></li>
              <li><a href="#services">Team Building</a></li>
              <li><a href="#services">Consulting</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} HuntlyTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
