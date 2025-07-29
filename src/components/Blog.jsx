import React from "react";
import "../styles/Blog.css";
import { FaRobot, FaGlobeAmericas, FaUsers } from "react-icons/fa";

const posts = [
  {
    icon: <FaRobot className="blog-icon" />,
    title: "The Future of AI in Talent Acquisition",
    category: "AI & Recruitment",
    date: "March 15, 2024",
    desc: "Exploring how artificial intelligence is revolutionizing the way companies find and hire top talent...",
  },
  {
    icon: <FaGlobeAmericas className="blog-icon" />,
    title: "Remote Work Impact on Hiring",
    category: "Industry Trends",
    date: "March 10, 2024",
    desc: "How the shift to remote work has changed recruitment strategies and what it means for the future...",
  },
  {
    icon: <FaUsers className="blog-icon" />,
    title: "Building Diverse Tech Teams",
    category: "Best Practices",
    date: "March 5, 2024",
    desc: "Strategies and best practices for creating inclusive hiring processes and building diverse teams...",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-content">
        <h2 className="blog-title">Latest Insights</h2>
        <p className="blog-description">
          Stay updated with the latest trends in recruitment and technology
        </p>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <div className="blog-card fade-in" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {p.icon}
              <div className="blog-category">{p.category}</div>
              <div className="blog-post-title">{p.title}</div>
              <div className="blog-date">{p.date}</div>
              <div className="blog-desc">{p.desc}</div>
              <a href="#" className="blog-read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
