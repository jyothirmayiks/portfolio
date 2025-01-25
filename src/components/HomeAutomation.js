import React from "react";
import "./HomeAutomation.css";

const HomeAutomation = () => {
  return (
    <div className="home-automation-page">
      <h1>Home Automation Using OpenThread</h1>
      <p>
        The "Home Automation Using OpenThread" project focuses on utilizing
        OpenThread technology to enhance the functionality and efficiency of
        homes.
      </p>
      <h2>Architecture</h2>
      <img
        src="architecture-diagram.png"
        alt="Architecture Diagram"
        className="architecture-image"
      />
      <h2>Components</h2>
      <ul>
        <li>Arduino (Microcontroller)</li>
        <li>LCD Display</li>
        <li>Temperature Sensor</li>
        <li>Water Pump</li>
        <li>Power Hub</li>
      </ul>
      <h2>Hardware Setup</h2>
      <img src="hardware-setup.png" alt="Hardware Setup" className="hardware-image" />
      <p>
        This project demonstrates how OpenThread technology can elevate
        the functionality of homes with an energy-efficient and secure
        system.
      </p>
    </div>
  );
};

export default HomeAutomation;
