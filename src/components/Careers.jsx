import React from "react";
import "../styles/Careers.css";
import {
  FaBrain,
  FaBullhorn,
  FaChartLine,
  FaUserTie,
  FaUserMd,
  FaGlobe,
} from "react-icons/fa";

const jobs = [
  {
    icon: <FaBrain className="career-icon" />,
    title: "Senior AI Engineer",
    type: "Full-time",
    desc: "Lead the development of our AI-powered matching algorithms and machine learning systems.",
    location: "San Francisco, CA",
  },
  {
    icon: <FaChartLine className="career-icon" />,
    title: "Product Manager",
    type: "Full-time",
    desc: "Drive product strategy and roadmap for our recruitment platform and user experience.",
    location: "New York, NY",
  },
  {
    icon: <FaBullhorn className="career-icon" />,
    title: "Sales Executive",
    type: "Full-time",
    desc: "Build relationships with enterprise clients and drive revenue growth in key markets.",
    location: "Remote",
  },
  {
    icon: <FaUserTie className="career-icon" />,
    title: "UX Designer",
    type: "Contract",
    desc: "Design intuitive user experiences for our recruitment platform and mobile applications.",
    location: "Austin, TX",
  },
  {
    icon: <FaUserMd className="career-icon" />,
    title: "Data Scientist",
    type: "Full-time",
    desc: "Analyze recruitment data and build predictive models to improve hiring outcomes.",
    location: "Seattle, WA",
  },
  {
    icon: <FaGlobe className="career-icon" />,
    title: "Customer Success",
    type: "Full-time",
    desc: "Ensure client success and satisfaction while driving product adoption and retention.",
    location: "Chicago, IL",
  },
];

const Careers = () => {
  return (
    <section id="careers" className="careers-section">
      <div className="careers-content">
        <h2 className="careers-title">Join Our Team</h2>
        <p className="careers-description">
          Be part of the future of recruitment technology
        </p>
        <div className="careers-grid">
          {jobs.map((job, i) => (
            <div
              className="career-box fade-in"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {job.icon}
              <div className="career-title">{job.title}</div>
              <div className="career-type">{job.type}</div>
              <div className="career-desc">{job.desc}</div>
              <div className="career-location">{job.location}</div>
              <button className="career-apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
        <div className="careers-footer">
          <p>
            Don’t see a role that fits?{" "}
            <strong>We’re always looking for talented individuals.</strong>
          </p>
          <button className="career-apply-btn alt">Send Us Your Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
