import React, { useEffect, useState } from "react";
import "./Education.css";
import coding from "/home/jyothirmayiks/Downloads/portfolio/src/assets/coding.png"; 

const Education = () => {
  
  const [educationData, setEducationData] = useState([]);

  
  useEffect(() => {
    
    fetch("http://localhost:8080/education") 
      .then((response) => response.json())
      .then((data) => {
        setEducationData(data.response); 
      })
      .catch((error) => console.error("Error fetching education data:", error));
  }, []);

  return (
    <section id="education" className="education-section">
      <h2 className="education-title">EDUCATION</h2>
      <div className="education-header">
        <div className="education-image">
          <img src={coding} alt="Education" />
        </div>
        <div className="education-container">
          {educationData.map((edu, index) => (
            <div className="education-box" key={index}>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <span className="education-year">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
