import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
    { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Bootstrap", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "Spring Boot", logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
    { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "PostgreSQL", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-slider">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
