import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import "./main.css"
import "./aboutMe.css"

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


      <section id="about-me">
      <div className="about-container">
        <h1>ABOUT ME</h1>
        <div className="experience-section">
          <div className="timeline">
            <div className="timeline-item">
              <h2>NORTHROP GRUMMAN</h2>
              <span>OP SUPPORT INTERN</span>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <h2>HDI GLOBAL SE</h2>
              <span>ADMINISTRATION ASSISTANT</span>
            </div>
          </div>
          <div className="description">
            <p>
              Strong written and verbal communication skills, essential for
              interacting with clients, underwriters, and other team members.
            </p>
            <p>
              Ability to analyze situations, identify issues, and propose
              solutions to overcome challenges encountered during the property
              underwriting process.
            </p>
            <p>
              Strong attention to detail in reviewing property documents,
              insurance policies, and underwriting submissions to ensure accuracy
              and completeness.
            </p>
            <p>
              Demonstrated ability to prioritize tasks, manage multiple deadlines,
              and work efficiently in a fast-paced environment.
            </p>
            <p>
              Understanding of the importance of maintaining confidentiality
              regarding sensitive property and client information.
            </p>
            <p>
              Proven ability to work collaboratively with underwriters, agents,
              brokers, and other stakeholders to support the property underwriting
              process.
            </p>
          </div>
        </div>
      </div>
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

