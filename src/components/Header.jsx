import React, { useEffect, useState } from "react";
import "../style/Header.css";

function Header() {
  // this hooks manage menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false); //mobile menu toggle
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true"; //convert to boolean
  }); //dark mode toggle

  //apply or remove dark-mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
    localStorage.setItem("darkMode", darkMode); //save user perference to localStorage
  }, [darkMode]);

  //ths function toggles the menu when the hamburger is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //this function toggles the dark mode when is clicked
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="main-Header">
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo"></div>
          <nav
            className={`nav-links ${isMenuOpen ? "open" : ""}`}
            id="navLinks"
          >
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            id="darkModeToggle"
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            {" "}
            {isMenuOpen ? "✖" : "☰"}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
