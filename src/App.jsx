import React, { useState, useEffect } from "react";
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
  const [stage, setStage] = useState("rocket"); // 'rocket' | 'welcome' | 'portfolio'

  useEffect(() => {
    // Show welcome screen after rocket intro
    const timer = setTimeout(() => {
      setStage("welcome");
    }, 5500); // not 999500!

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Always visible */}
      <StarBackground />
      <div id="custom-cursor"></div>
      <CustomCursor />

      {/* Rocket Intro Stage */}
      {stage === "rocket" && <RocketIntro />}

      {/* Welcome Text Stage */}
      {stage === "welcome" && (
        <HeroText onButtonClick={() => setStage("portfolio")} />
      )}

      {/* Portfolio Stage */}
      {stage === "portfolio" && (
        <div className=" bg-black text-white">
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
