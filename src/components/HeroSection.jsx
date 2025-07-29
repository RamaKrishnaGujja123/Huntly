import React, { useEffect, useRef } from "react";
import "../styles/HeroSection.css";

function openWhatsApp() {
  window.open("https://wa.me/?text=I'm%20interested%20in%20a%20free%20trial!", "_blank");
}

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
      ref.current.innerText = end >= 1000 ? Math.floor(current).toLocaleString() : Math.floor(current);
    }, 20);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <div className="stats-counter" ref={ref}>0</div>;
}

const statsData = [
  { target: 10000, label: "Companies Trust Us" },
  { target: 500000, label: "Candidates Placed" },
  { target: 95, label: "Success Rate %" },
  { target: 24, label: "Countries Served" }
];

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="overlay"></div>
      {/* The main hero box */}
      <div className="hero-content">
        <h1>
          AI-Powered Recruitment<br />Made Simple
        </h1>
        <p>
          Transform your hiring process with intelligent automation, smart candidate matching, and seamless workflow management.
        </p>
        <div className="button-group">
          <button
            onClick={openWhatsApp}
            className="primary-btn"
          >
            Start Free Trial
          </button>
          <button
            className="secondary-btn"
          >
            Watch Demo
          </button>
        </div>
      </div>
      {/* Stats grid below the hero box */}
      <div className="stats-grid">
        {statsData.map((stat, idx) => (
          <div key={idx}>
            <StatsCounter target={stat.target} />
            <p className="stats-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;