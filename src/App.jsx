import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import StarBackground from "./components/StarBackground";
import CustomCursor from "./components/Cursor";
import HeroText from "./components/HeroText";
import RocketIntro from "./components/RocketIntro";
import Resume from "./components/Resume";
import PortfolioPage from "./components/PortfolioPage";

function HomePage({ stage, setStage, goToPortfolio }) {
  useEffect(() => {
    if (goToPortfolio) {
      setStage("portfolio");
      return;
    }

    const timer = setTimeout(() => {
      setStage("welcome");
    }, 5000);

    return () => clearTimeout(timer);
  }, [setStage]);

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

// This component wraps routes and controls global effects
function AppRoutes() {
  const location = useLocation();
  const [stage, setStage] = useState("rocket");

  // 👇 Detect "goToPortfolio" from navigation state
  useEffect(() => {
    if (location.pathname === "/" && location.state?.goToPortfolio) {
      setStage("portfolio");
      // Clear state so it doesn't persist
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    document.body.classList.remove("homepage", "resume-page");

    if (location.pathname === "/resume") {
      document.body.classList.add("resume-page");
    } else if (location.pathname === "/" && stage === "portfolio") {
      document.body.classList.add("homepage");
    }
  }, [location.pathname, stage]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            stage={stage}
            setStage={setStage}
            goToPortfolio={location.state?.goToPortfolio}
          />
        }
      />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
