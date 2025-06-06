// Resume.jsx
import React from "react";
import "../style/Resume.css";
import CustomCursor from "./Cursor";
import Header from "./Header";

const Resume = () => {
  return (
    <>
    <Header />
      <div id="custom-cursor"></div>
      <CustomCursor />
      <section className="resume-container">
        <div className="resume-box">
          <h1 className="resume-title">Khushi Rana</h1>
          <p className="resume-sub">Front-End Developer</p>

          <div className="resume-section">
            <h2>Objective</h2>
            <p>
              Front-End Developer with 3+ years of experience building
              responsive, optimized websites. Proficient in HTML, CSS,
              JavaScript, React, and Magento 2 with strong focus on UI/UX,
              performance, and cross-browser testing. Seeking to deliver
              scalable, user-friendly solutions in fast-paced teams.
            </p>
          </div>

          <div className="resume-section">
            <h2>Skills</h2>
            <ul>
              <li>
                <strong>Languages:</strong> C, HTML5, CSS3, JavaScript (ES6+),
                Sass/SCSS, Bootstrap, Tailwind CSS, XML, React, WordPress, SQL.
              </li>
              <li>
                <strong>Backend:</strong>Socket.IO (frontend usage), MongoDB,
                MySQL, PostgreSQL
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, VS Code, Figma, Elementor,
                Jira, Salesforce, Discord , Trello , Slack
              </li>
              <li>
                <strong>Testing:</strong> UI/UX Design, Manual Testing, Bug
                Reporting, Cross-Browser Testing, Test Case Documentation,
                Responsive Design, Performance Optimization, Caching
              </li>
            </ul>
          </div>

          <div className="resume-section">
            <h2>Experience</h2>
            <p>
              <strong>Frontend Developer</strong> - Golfoy India (2023–Present)
            </p>
            <ul>
              <li>Built responsive web pages using HTML/CSS/JS</li>
              <li>Improved load time by 30%</li>
            </ul>

            <p>
              <strong>Manual Tester</strong> - NXPRO (2022–2023)
            </p>
            <p>
              <strong>Website Designer</strong> - NXPRO (2021–2022)
            </p>
          </div>

          <div className="resume-section">
            <h2>Projects</h2>
            <ul>
              <li>
                <strong>Golfoy India:</strong> Magento e-commerce site for golf
                equipment
              </li>
              <li>
                <strong>Perfume Essence:</strong> Luxury fragrance platform in
                Magento
              </li>
              <li>
                <strong>Artamis:</strong> WordPress agency site with optimized
                performance
              </li>
            </ul>
          </div>

          <div className="resume-section">
            <h2>Education</h2>
            <p>BCA – BBK DAV College for Women, Amritsar (2015–2019)</p>
          </div>

          <div className="resume-section">
            <h2>Achievements</h2>
            <ul>
              <li>
                Positive feedback for attention to detail and testing quality
              </li>
              <li>Best Student in Matriculation</li>
            </ul>
          </div>

          <div className="download-resume">
            <a href="/Khushi SDE.pdf" download className="download-btn">
              Download PDF Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
