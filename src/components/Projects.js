import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(2); 
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Hearing aid using IC741 Opamp",
      description:
        "Hearing aid is small enough to fit into a match-box as it uses only one IC and very few discrete components. Also works as a baby-phone by using a speaker instead of an ear-phone.",
      path: "/hearingaid",
    },
    {
      id: 2,
      title: "Fire Fighting Robot",
      description:
        "A fire-fighting robot with the help of Arduino, flame sensor, and servo motors. Aims to develop an autonomous or semi-autonomous vehicle equipped with sensors to detect fire and actively extinguish flames using a water pump and nozzle.",
      path: "/fire",
    },
    {
      id: 3,
      title: "Home Automation Using OpenThread",
      description:
        "OpenThread is an IPv6-based open standard that allows smart home devices to connect to the cloud securely and reliably. The project includes Thread Automation, which automates the Thread Test Harness software.",
      path: "/homeautomation",
    },
    {
      id: 4,
      title: "Grievance Management System",
      description:
        "A web-based platform designed to streamline grievance submission, assignment, and resolution efficiently, with role-based access for Users, Supervisors, and Assignees.",
      path: "/grieve",
    },
    {
      id: 5,
      title: "MCU Site",
      description:
        "A frontend-only Marvel-themed website created using HTML, CSS, and JavaScript. It showcases Marvel characters with an interactive design and smooth navigation, offering an engaging experience for fans.",
      path: "/mcu",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>MY PROJECTS</h2>
        <p>Some of the exciting works I have done so far!</p>
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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