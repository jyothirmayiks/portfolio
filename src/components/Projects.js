import React from "react";
import "./Projects.css";
import Hearing from "/home/jyothirmayiks/Downloads/portfolio/src/assets/hearingaids.PNG";
import Fire from "/home/jyothirmayiks/Downloads/portfolio/src/assets/fire.jpg";
import Openthread from "/home/jyothirmayiks/Downloads/portfolio/src/assets/openthread.png";
import Grieve from "/home/jyothirmayiks/Downloads/portfolio/src/assets/grieve.png";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>MY PROJECTS</h2>
        <p>Some of the exciting works I have done so far!.</p>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <h3>Hearing aid using IC741 Opamp</h3>
          <p>
            Hearing aid is small enough to fit into a match-box as it uses only
            one IC and very few discrete components.Also work as a baby-phone by
            using a speaker instead of an ear-phone.
          </p>
          <img src={Hearing} alt="Hearing Aid" />
          <a href="/project1-details" className="btn btn-primary">
          <i className="bi-chevron-right"></i>
          </a>
        </div>
        <div className="project-card">
          <h3>Fire Fighting Robot</h3>
          <p>
            A fire fighting robot with the help of Arduino, flame sensor and
            servo motors.Aims to develop an autonomous or semi-autonomous
            vehicle equipped with sensors to detect fire and actively extinguish flames using a water
            pump and nozzle
          </p>
          <img src={Fire} alt="Hearing Aid" />
          <a href="/project2-details" className="btn btn-primary">
          <i className="bi-chevron-right"></i>
          </a>
        </div>
        <div className="project-card">
          <h3>Home Automation Using OpenThread</h3>
          <p>
            OpenThread is an IPv6-based open standard that allows smart home
            devices to connect to the cloud securely and reliably. The
            project includes Thread Automation, which
            automates the Thread Test Harness software.
          </p>
          <img src={Openthread} alt="Hearing Aid" />
          <a href="/project3-details" className="btn btn-primary">
          <i className="bi-chevron-right"></i>
          </a>
        </div>
        <div className="project-card">
          <h3>Grievance Management System</h3>
          <p>
            A web-based platform designed to streamline grievance submission,
            assignment, and resolution efficiently, with role-based access for
            Users, Supervisors, and Assignees.
          </p>
          <img src={Grieve} alt="Hearing Aid" />
          <a href="/project4-details" className="btn btn-primary">
          <i className="bi-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 