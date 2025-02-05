import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import UsersManagement from "./UsersManagement.js";
import SkillsManagement from "./SkillsManagement.js";
import EducationManagement from "./EducationManagement.js";
import ProjectManagement from "./ProjectManagement.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Username");
  const [activeSection, setActiveSection] = useState("Dashboard");

  const [userCount, setUserCount] = useState(0);
  const [skillsCount, setSkillsCount] = useState(0);
  const [educationCount, setEducationCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("portfolioUser");
    if (storedUser) {
      setUsername(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchCounts = async () => {
    try {
      const [userRes, skillRes, educationRes, projectRes] = await Promise.all([
        axios.get("http://localhost:8082/api/users/count"),
        axios.get("http://localhost:8082/api/skills/count"),
        axios.get("http://localhost:8082/api/education/count"),
        axios.get("http://localhost:8082/api/projects/count"),
      ]);

      setUserCount(userRes.data.count);
      setSkillsCount(skillRes.data.count);
      setEducationCount(educationRes.data.count);
      setProjectCount(projectRes.data.count);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
    const interval = setInterval(fetchCounts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container d-flex">
      <div className="top-bar d-flex justify-content-between align-items-center p-3">
        <div className="user-info d-flex align-items-center">
          <img src="/user (2).png" alt="User" className="user-logo" />
          <span className="user-name">{username}</span>
        </div>
        <a href="http://localhost:3000" className="jyothi-logo">Jyothi.</a>
      </div>

      <div className="main-content d-flex w-100">
        <Sidebar onSelectSection={(section) => setActiveSection(section)} />

        <div className="content-area flex-grow-1 p-4">
          {activeSection === "Dashboard" && (
            <div className="dashboard-grid">
              <div className="stat-card users">
                <h4>Users</h4>
                <p>Total Users:{userCount}</p>
              </div>
              <div className="stat-card skills">
                <h4>Skills</h4>
                <p>Total Skills:{skillsCount}</p>
              </div>
              <div className="stat-card education">
                <h4>Education</h4>
                <p>Total Educational records:{educationCount}</p>
              </div>
              <div className="stat-card projects">
                <h4>Projects</h4>
                <p>Total Projects:{projectCount}</p>
              </div>
            </div>
          )}
          {activeSection === "Users" && <UsersManagement />}
          {activeSection === "Skills" && <SkillsManagement />}
          {activeSection === "Education" && <EducationManagement />}
          {activeSection === "Projects" && <ProjectManagement />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
