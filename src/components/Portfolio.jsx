import React from "react";
import "../styles/Portfolio.css";
import {
  FaBuilding,
  FaRocket,
  FaRobot,
  FaUniversity,
  FaHeartbeat,
  FaGlobeAmericas,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaBuilding className="portfolio-icon" />,
    title: "Enterprise Solutions",
    desc: "Helped Fortune 500 companies scale their tech teams with 200+ successful placements in 6 months.",
    tag: "Technology Sector • 2023",
  },
  {
    icon: <FaRocket className="portfolio-icon" />,
    title: "Startup Growth",
    desc: "Supported 50+ startups in building their core teams from ground up with 95% retention rate.",
    tag: "Startup Ecosystem • 2023",
  },
  {
    icon: <FaRobot className="portfolio-icon" />,
    title: "AI Implementation",
    desc: "Reduced hiring time by 60% for clients through our AI-powered matching system.",
    tag: "AI & Machine Learning • 2024",
  },
  {
    icon: <FaUniversity className="portfolio-icon" />,
    title: "Financial Services",
    desc: "Specialized recruitment for fintech companies with 100+ successful executive placements.",
    tag: "Financial Technology • 2023",
  },
  {
    icon: <FaHeartbeat className="portfolio-icon" />,
    title: "Healthcare Tech",
    desc: "Connected healthcare organizations with top talent during critical expansion phases.",
    tag: "Healthcare Technology • 2024",
  },
  {
    icon: <FaGlobeAmericas className="portfolio-icon" />,
    title: "Global Expansion",
    desc: "Facilitated international hiring for companies expanding across 15+ countries.",
    tag: "Global Markets • 2024",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-content">
        <h2 className="portfolio-title">Our Portfolio</h2>
        <p className="portfolio-description">
          Successful recruitment campaigns and client success stories
        </p>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="portfolio-box fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {p.icon}
              <div className="portfolio-title-box">{p.title}</div>
              <div className="portfolio-desc">{p.desc}</div>
              <div className="portfolio-tag">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
