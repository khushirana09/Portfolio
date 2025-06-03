import React from 'react';
import '../style/Experience.css';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Golfoy India',
    date: 'Aug 2023 – Present',
    description: [
      'Built responsive and accessible Magento UI components.',
      'Optimized site performance to reduce load times by 30%.',
      'Created custom product filtering and showcase layouts.',
    ],
    icon: '💻',
  },
  {
    role: 'Manual Tester',
    company: 'NXPRO',
    date: 'May 2022 – Aug 2023',
    description: [
      'Developed detailed test plans for client-facing applications.',
      'Logged and documented bugs, ensuring timely resolution.',
      'Maintained high standards through regression and UI testing.',
    ],
    icon: '✅',
  },
  {
    role: 'Website Designer',
    company: 'NXPRO',
    date: 'June 2021 – May 2022',
    description: [
      'Crafted cross-browser-compatible, mobile-first layouts.',
      'Enhanced UI clarity and consistency through CSS refactors.',
      'Collaborated closely with QA to ensure front-end excellence.',
    ],
    icon: '🎨',
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-stack">
          {experiences.map(({ role, company, date, description, icon }) => (
            <div className="experience-card" key={role + company}>
              <div className="card-icon">{icon}</div>
              <div className="card-content">
                <h3>{role} <span className="company">@ {company}</span></h3>
                <div className="date-badge">{date}</div>
                <ul>
                  {description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
