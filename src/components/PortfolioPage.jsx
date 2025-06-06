// components/PortfolioPage.jsx
import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
