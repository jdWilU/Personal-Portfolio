import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src="/images/mesh-gradient (1).png" alt="Description of the image" />
      <section id="about">
        <h1>About Me</h1>
        <p>I am a fifth-year engineering and IT student...</p>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <p>Here are some of the projects I have worked on...</p>
      </section>
      <section id="experience">
        <h1>Experience</h1>
        <p>Details about my professional experience...</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>You can reach me at example@example.com</p>
      </section>
    </div>
  );
}

export default App;
