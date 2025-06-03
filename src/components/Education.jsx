import React from 'react';
import '../style/Education.css';

function Education() {
  return (
    <div className='Education-block'>
      <section className="section education" id="education">
        <h2 className="section-title">Education</h2>
        <div className="container">
          <div className="grad-year">2019</div>
          <div className="grad-details">
            <h3>Bachelor of Computer Application (BCA)</h3>
            <p>BBK DAV College for Women, Amritsar</p>
            <span>Aug 2015 – May 2019</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
