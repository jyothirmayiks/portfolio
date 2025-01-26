import React from "react";
import "./About.css";
import Jyothi from "/home/jyothirmayiks/Downloads/portfolio/src/assets/jyothi.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-sidebar">
        <h3>About Me</h3>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2>Who I am</h2>
          <p>
            Hi, I'm <strong>Jyothirmayi</strong>, a passionate software developer with a
            background in Electronics and Communication Engineering. I
            specialize in full-stack web development using technologies like
            React, Spring Boot, and PostgreSQL. I enjoy creating user-friendly
            applications and am always eager to learn and grow.
          </p>
          <p>
          Let's connect and collaborate on exciting projects!
          </p>
        </div>
        <div className="about-image">
          <img src={Jyothi} alt="jyothi" />
        </div>
      </div>
    </section>
  );
};

export default About;