import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import StarBackground from "./components/StarBackground";
import CustomCursor from "./components/Cursor";
import HeroText from "./components/HeroText";
import RocketIntro from "./components/RocketIntro";
import Resume from "./components/Resume";
import PortfolioPage from "./components/PortfolioPage"; // ✅ new

function HomePage() {
  const [stage, setStage] = useState("rocket");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("welcome");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StarBackground />
      <div id="custom-cursor"></div>
      <CustomCursor />

      {stage === "rocket" && <RocketIntro />}
      {stage === "welcome" && (
        <HeroText onButtonClick={() => setStage("portfolio")} />
      )}
      {stage === "portfolio" && <PortfolioPage />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<PortfolioPage />} /> {/* ✅ new */}
      </Routes>
    </Router>
  );
}

export default App;
