import React from 'react';
import '../style/Skills.css';
import images from '../assets/images';  // import all images from helper

const skillsData = [
  {
    title: 'Frontend',
    img: images.frontEnd,
    description: 'HTML5, CSS3, JavaScript (ES6+), SCSS, Bootstrap, React',
  },
  {
    title: 'Tools & Dev',
    img: images.devTool,
    description: 'Git, GitHub, VS Code, Chrome DevTools, Figma',
  },
  {
    title: 'CMS & E-Commerce',
    img: images.cms,
    description: 'Magento 2, WordPress, Elementor, WooCommerce',
  },
  {
    title: 'Testing',
    img: images.testing,
    description: 'Manual QA, Test Cases, Bug Reporting, Regression Testing',
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-card-grid">
          {skillsData.map(({ title, img, description }) => (
            <div className="skill-card" key={title}>
              <div className="card-front">
                <h3>{title}</h3>
                <img src={img} alt={`${title} Icon`} />
              </div>
              <div className="card-back">
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
