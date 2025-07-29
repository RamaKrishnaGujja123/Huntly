import React, { useEffect, useRef } from "react";
import "../styles/AboutUs.css";
import { FaRobot, FaUserTie, FaCheckCircle } from "react-icons/fa";

function StatsCounter({ target, duration = 2000 }) {
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const end = typeof target === "number" ? target : parseInt(target.replace(/,/g, ""));
    if (start === end) return;
    let current = start;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      ref.current.innerText =
        end >= 1000 ? Math.floor(current).toLocaleString() : Math.floor(current);
    }, 20);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <div className="aboutus-stat-number" ref={ref}>0</div>;
}

const statsData = [
  { target: 500, suffix: "+", label: "Companies Served" },
  { target: 50000, suffix: "+", label: "Successful Placements" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: "24/7", suffix: "", label: "Support Available" }
];

const features = [
  {
    icon: <FaRobot className="feature-icon" />,
    title: "Innovation First",
    desc: "Cutting-edge AI technology"
  },
  {
    icon: <FaUserTie className="feature-icon" />,
    title: "Client-Centric",
    desc: "Tailored solutions for every need"
  },
  {
    icon: <FaCheckCircle className="feature-icon" />,
    title: "Proven Results",
    desc: "Track record of success"
  }
];

const companyColors = [
  "#6366f1",
  "#f59e42",
  "#10b981",
  "#3b82f6",
  "#ec4899",
  "#a78bfa",
  "#f43f5e"
];

const companies = [
  "TechCorp",
  "InnovateLab",
  "DataFlow",
  "CloudTech",
  "StartupHub",
  "DevSolutions",
  "FinanceFlow"
];

const AboutUs = () => (
  <section id="aboutus" className="aboutus-section">
    <h2 className="aboutus-title">About HuntlyTech</h2>
    <p className="aboutus-description">
      Founded in 2020, HuntlyTech has emerged as a leading provider of AI-powered recruitment solutions. We specialize in transforming traditional hiring processes through innovative technology and data-driven insights.<br /><br />
      Our mission is to bridge the gap between talented professionals and forward-thinking companies by leveraging artificial intelligence, machine learning, and advanced analytics to create perfect matches.
    </p>

    {/* Stats Row */}
    <div className="aboutus-stats">
      {statsData.map((stat, idx) => (
        <div key={idx}>
          {stat.suffix !== "" && stat.suffix !== undefined ? (
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
              <StatsCounter target={stat.target} />
              <span className="aboutus-stat-suffix">{stat.suffix}</span>
            </div>
          ) : (
            <StatsCounter target={stat.target} />
          )}
          <div className="aboutus-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Features Row */}
    <div className="aboutus-features">
      {features.map((feature, idx) => (
        <div key={idx} className="aboutus-feature-box">
          {feature.icon}
          <span className="aboutus-feature-title">{feature.title}</span>
          <span className="aboutus-feature-desc">{feature.desc}</span>
        </div>
      ))}
    </div>

    {/* Trusted Companies */}
    <div className="aboutus-trusted">
      <div className="aboutus-trusted-title">Trusted by Leading Companies</div>
      <div className="aboutus-trusted-desc">Join thousands of companies that have transformed their hiring process</div>
      <div className="aboutus-trusted-logos marquee">
        <div className="marquee-content">
          {companies.map((company, idx) => (
            <span
              key={company}
              className="aboutus-company"
              style={{ background: companyColors[idx], color: "#fff" }}
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
