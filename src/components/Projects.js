import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [projectData, setProjectData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/projects") 
      .then((response) => {
        const fetchedData = Array.isArray(response.data.response)
          ? response.data.response
          : [response.data.response];

        setProjectData(fetchedData); 
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleNavigate = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>PROJECTS</h2>
        <p>Some of the exciting projects I have done so far!</p>
      </div>

      <div className="projects-carousel">
        {projectData.map((project, index) => {
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
              <h3>{project.title}</h3> 
              <p>{project.description}</p> 
              <button
                className="arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate(project.id);
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
