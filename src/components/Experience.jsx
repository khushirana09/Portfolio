import React, { useRef, useState, useEffect } from "react";
import "../style/Experience.css";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Golfoy India",
    date: "Aug 2023 – Present",
    description: [
      "Built responsive and accessible Magento UI components.",
      "Optimized site performance to reduce load times by 30%.",
      "Created custom product filtering and showcase layouts.",
    ],
    icon: "💻",
  },
  {
    role: "Manual Tester",
    company: "NXPRO",
    date: "May 2022 – Aug 2023",
    description: [
      "Developed detailed test plans for client-facing applications.",
      "Logged and documented bugs, ensuring timely resolution.",
      "Maintained high standards through regression and UI testing.",
    ],
    icon: "✅",
  },
  {
    role: "Website Designer",
    company: "NXPRO",
    date: "June 2021 – May 2022",
    description: [
      "Crafted cross-browser-compatible, mobile-first layouts.",
      "Enhanced UI clarity and consistency through CSS refactors.",
      "Collaborated closely with QA to ensure front-end excellence.",
    ],
    icon: "🎨",
  },
];

function Experience() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth * 0.9,
      behavior: "smooth",
    });
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth * 0.9,
      behavior: "smooth",
    });
    setActiveIndex((prev) => Math.min(prev + 1, experiences.length - 1));
  };

  return (
    <div className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-stack-wrapper">
          <div className="experience-slider-buttons">
            <button onClick={scrollLeft}>←</button>
            <button onClick={scrollRight}>→</button>
          </div>

          <div className="experience-stack" ref={scrollRef}>
            {experiences.map((exp, index) => (
              <div
                className={`experience-card ${
                  index === activeIndex ? "active" : ""
                }`}
                key={exp.role + exp.company}
              >
                <div className="card-icon">{exp.icon}</div>
                <div className="card-content">
                  <h3>
                    {exp.role} <span className="company">@ {exp.company}</span>
                  </h3>
                  <div className="date-badge">{exp.date}</div>
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
