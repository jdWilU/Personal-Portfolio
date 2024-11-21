import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import "./main.css"

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="main">
        <img src="/images/mesh-gradient (1).png" alt="Background gradient" />
        <div className="main-content">
          <h1>HI, I'M JADEN.</h1>
          <p>
            I am a fifth-year engineering and information technology student,
            majoring in aerospace and electrical engineering, and computer science.
          </p>
        </div>
      </section>


      <section id="about">
        <h2>About Me</h2>
        <p>I am a fifth-year engineering and IT student...</p>
      </section>


      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on...</p>
      </section>


      <section id="experience">
        <h2>Experience</h2>
        <p>Details about my professional experience...</p>
      </section>

      
      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at example@example.com</p>
      </section>
    </div>
  );
}

export default App;

