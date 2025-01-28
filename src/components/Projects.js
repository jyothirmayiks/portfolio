import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(2); 
  const [projects, setProjects] = useState([]); 
  const [headerTitle, setHeaderTitle] = useState(""); 
  const [headerDescription, setHeaderDescription] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/projectdetails")
      .then((response) => {
        const fetchedData = Array.isArray(response.data.response)
          ? response.data.response
          : [response.data.response]; 

        setProjects(fetchedData);

        
        if (fetchedData.length > 0) {
          setHeaderTitle(fetchedData[0].title);
          setHeaderDescription(fetchedData[0].description1);
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index); 
  };

  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <section id="projects" className="projects-section">
      
      <div className="projects-header">
        <h2>{headerTitle}</h2>
        <p>{headerDescription}</p>
      </div>

      
      <div className="projects-carousel">
        {projects.map((project, index) => {
          let position = "";
          if (index === activeIndex) {
            position = "active"; 
          } else if (index < activeIndex) {
            position = "left"; 
          } else {
            position = "right"; 
          }

          return (
            <div
              key={project.id}
              className={`project-card ${position}`}
              onClick={() => handleCardClick(index)} 
            >
              <h3>{project.heading}</h3>
              <p>{project.description2}</p>
              <button
                className="arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate(project.path); 
                }}
              >
                <i className="bi bi-box-arrow-right"></i>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;