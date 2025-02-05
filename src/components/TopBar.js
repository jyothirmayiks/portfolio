import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const TopBar = ({ username }) => {
  return (
    <nav className="top-bar d-flex justify-content-between align-items-center px-3">
      <div className="d-flex align-items-center">
        <img src="/login.png" alt="User" className="user-logo" />
        <span className="username">{username}</span>
      </div>
      <Link to="http://localhost:3000" className="jyothi-logo">
        Jyothi.
      </Link>
    </nav>
  );
};

export default TopBar;
