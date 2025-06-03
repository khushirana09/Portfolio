import React from "react";
import "../style/About.css";

function About() {
  return (
    <section className="about-terminal" id="about">
      <div className="terminal-content">
        <div className="terminal-header">
          <span className="circle red"></span>
          <span className="circle yellow"></span>
          <span className="circle green"></span>
        </div>
        <div className="terminal-body">
          <p className="terminal-line">
            <span className="command">&gt; about-me</span>
          </p>
          <p className="terminal-text">
            Hi, I'm <span className="highlight">Khushi Rana</span> — a
            passionate Front-End Developer with 3+ years of experience.
          </p>
          <p className="terminal-text">
            Skilled in <span className="highlight">HTML</span>,{" "}
            <span className="highlight">CSS</span>,{" "}
            <span className="highlight">JavaScript</span>,{" "}
            <span className="highlight">React</span>, and{" "}
            <span className="highlight">Magento</span>.
          </p>
          <p className="terminal-text">
            I love building <span className="highlight">clean</span>,{" "}
            <span className="highlight">accessible</span> UIs with performance
            and aesthetics in balance.
          </p>

          <br />

          <p className="terminal-line">
            <span className="command">&gt; career-objective</span>
          </p>
          <p className="terminal-text">
            To work in a fast-paced, product-driven team where I can use my
            creativity to build digital experiences that matter.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
