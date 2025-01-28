import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:8080/api/skills") 
      .then((response) => {
        setSkills(response.data.response); 
      })
      .catch((error) => {
        console.error("There was an error fetching the skills data:", error);
      });
  }, []);

  const duplicateSkills = [...skills, ...skills]; 

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-slider">
        <div className="skills-track">
          {duplicateSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={`data:image/png;base64,${skill.image}`} alt={skill.name} className="skill-logo" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
