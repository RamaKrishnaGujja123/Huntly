import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Ready to Get Started?</h2>
        <p className="contact-subtitle">
          Join thousands of companies already using HuntlyTech
        </p>

        <form className="contact-form">
          <div className="contact-grid">
            <input
              type="text"
              placeholder="First Name"
              className="contact-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="contact-input"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="contact-input"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Tell us about your needs"
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        <div className="contact-alt text-center">
          <p className="contact-connect-label">Or connect with us:</p>
          <div className="contact-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
            <a href="mailto:info@huntlytech.com" className="contact-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
