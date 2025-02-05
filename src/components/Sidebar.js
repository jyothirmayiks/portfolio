import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const Sidebar = ({ onSelectSection }) => {
  const handleLogin = () => {
    
    localStorage.setItem("isLoggedIn", "1");
    window.location.href = "/dashboard"; 
  };

  const handleLogout = () => {
    
    localStorage.removeItem("isLoggedIn");
    sessionStorage.clear();
    window.location.href = "/login"; 
  };

  return (
    <div className="sidebar d-flex flex-column p-3">
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <button className="nav-link text-dark" onClick={() => onSelectSection("Dashboard")}>Dashboard</button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-dark" onClick={() => onSelectSection("Users")}>Users</button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-dark" onClick={() => onSelectSection("Skills")}>Skills</button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-dark" onClick={() => onSelectSection("Education")}>Education</button>
        </li>
        <li className="nav-item">
          <button className="nav-link text-dark" onClick={() => onSelectSection("Projects")}>Projects</button>
        </li>
      </ul>

      
      <button className="logout-btn btn btn-danger w-100 mt-auto" onClick={handleLogout}><i class="bi bi-box-arrow-right"></i> 
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
