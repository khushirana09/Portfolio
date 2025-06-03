import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import CustomCursor from "./components/Cursor";
import HeroText from "./components/HeroText";
import RocketIntro from "./components/RocketIntro";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      {/* ⭐ Starry Background & Cursor - always stay on screen */}
      <StarBackground />
      <div id="custom-cursor"></div>
      <CustomCursor />

      {/* ✅ Step 1: Show RocketIntro first (page 1) */}
      {!showPortfolio && (
        <>
          <RocketIntro />
          <HeroText onButtonClick={() => setShowPortfolio(true)} />
        </>
      )}

      {/* ✅ Step 2: Show Portfolio only after HeroText button click (page 2) */}
      {showPortfolio && (
        <div className="relative z-10 bg-black text-white">
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
      )}
    </>
  );
}

export default App;
