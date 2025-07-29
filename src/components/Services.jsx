import React from "react";
import "../styles/Services.css";
import {
  FaBrain,
  FaSearch,
  FaChartBar,
  FaUsers,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBrain className="service-icon" />,
    title: "AI-Powered Matching",
    desc: "Advanced algorithms analyze candidate profiles and match them with job requirements for perfect fits.",
  },
  {
    icon: <FaSearch className="service-icon" />,
    title: "Automated Screening",
    desc: "Streamline your screening process with automated resume parsing and candidate evaluation.",
  },
  {
    icon: <FaChartBar className="service-icon" />,
    title: "Analytics Dashboard",
    desc: "Get insights into your recruitment performance with comprehensive analytics and reporting.",
  },
  {
    icon: <FaUsers className="service-icon" />,
    title: "Team Collaboration",
    desc: "Enable seamless collaboration between recruiters, hiring managers, and team members.",
  },
  {
    icon: <FaShieldAlt className="service-icon" />,
    title: "Secure & Compliant",
    desc: "Enterprise-grade security with GDPR compliance and data protection measures.",
  },
  {
    icon: <FaBolt className="service-icon" />,
    title: "Lightning Fast",
    desc: "Optimized performance ensures quick loading times and smooth user experience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          Comprehensive recruitment solutions tailored to meet your specific hiring needs and business objectives.
        </p>
        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className="service-box fade-in"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {service.icon}
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
