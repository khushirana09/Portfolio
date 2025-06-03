import React, { useState } from "react";
import "../style/Projects.css";

const projects = [
  {
    title: "Golfoy India",
    desc: "Custom Magento theme for golf equipment e-commerce site.",
    icon: "⛳️",
  },
  {
    title: "Perfume Essence",
    desc: "Luxury fragrance storefront developed with Magento.",
    icon: "🌸",
  },
  {
    title: "Artamis Agency",
    desc: "WordPress-powered website for a creative digital agency.",
    icon: "🎨",
  },
  {
    title: "Senior Care (QA)",
    desc: "Manual testing ensuring seamless user flow and accessibility.",
    icon: "🛡️",
  },
  {
    title: "Godspeed (QA)",
    desc: "Manually tested scheduling platform across devices.",
    icon: "⚡️",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="projects-timeline-section" id="projects">
      <div className="project-terminal-box">
        <div className="project-content">
          <h2 className="section-title">Featured Projects</h2>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div
              className="timeline-fill"
              style={{
                width: `${(activeIndex / (projects.length - 1)) * 100}%`,
              }}
            ></div>
            <div className="timeline-nodes">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`timeline-node ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  style={{ left: `${(index / (projects.length - 1)) * 100}%` }}
                >
                  <span className="node-icon">{project.icon}</span>
                  <span className="node-tooltip">{project.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-details">
            <h3>{projects[activeIndex].title}</h3>
            <p>{projects[activeIndex].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
