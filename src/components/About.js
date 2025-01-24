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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
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
