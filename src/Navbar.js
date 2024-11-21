import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><a href="#about-me">ABOUT ME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
        </ul>
        <a href="#contact" className="navbar-contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
