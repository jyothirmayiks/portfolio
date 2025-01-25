import React from "react";
import "./Education.css";
import coding from "/home/jyothirmayiks/Downloads/portfolio/src/assets/coding.png";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Electronics and Communication",
      institution: "NSS College of Engineering, Palakkad",
      year: "2020 - 2024",
    },
    {
      degree: "Higher Secondary Education",
      institution: "St. Aloysius HSS Elthuruth",
      year: "2017 - 2019",
    },
    {
      degree: "Secondary school leaving certificate",
      institution: "Sacred Hearts Convent Girls HS, Kandassankadav",
      year: "2017", 
    },
  ];

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
                <p className="education-institution">
                  
                    {edu.institution}
                  
                </p>
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
