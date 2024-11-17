import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="about" style={{ padding: "100px 20px", height: "100vh" }}>
        <h1>About Me</h1>
        <p>Details about yourself.</p>
      </section>
      <section id="projects" style={{ padding: "100px 20px", height: "100vh" }}>
        <h1>Projects</h1>
        <p>Details about your projects.</p>
      </section>
      <section id="experience" style={{ padding: "100px 20px", height: "100vh" }}>
        <h1>Experience</h1>
        <p>Details about your experience.</p>
      </section>
      <section id="contact" style={{ padding: "100px 20px", height: "100vh" }}>
        <h1>Contact</h1>
        <p>Contact details.</p>
      </section>
    </div>
  );
}

export default App;
