import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../style/Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // ✅ Conditionally render minimal or full header
  const isResumePage = location.pathname === "/resume";

  return (
    <div className="main-Header">
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo"></div>

          {!isResumePage ? (
            // ✅ Full nav for homepage
            <nav
              className={`nav-links ${isMenuOpen ? "open" : ""}`}
              id="navLinks"
            >
              <button onClick={() => handleNavClick("about")}>About</button>
              <button onClick={() => handleNavClick("projects")}>
                Projects
              </button>
              <button onClick={() => handleNavClick("experience")}>
                Experience
              </button>
              <button onClick={() => handleNavClick("skills")}>Skills</button>
              <button onClick={() => handleNavClick("education")}>
                Education
              </button>
              <button onClick={() => handleNavClick("contact")}>Contact</button>
              <button>
                <Link to="/resume">Resume</Link>
              </button>
            </nav>
          ) : (
            // ✅ Minimal nav for resume
            <nav className="nav-links">
              <button onClick={() => navigate("/portfolio")}>← Homepage</button>
            </nav>
          )}

          <button
            id="darkModeToggle"
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {!isResumePage && (
            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? "✖" : "☰"}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
