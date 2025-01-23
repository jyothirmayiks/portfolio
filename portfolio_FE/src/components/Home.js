import React from 'react';
import "./Home.css";


const Home = () => {
  return (
    <section id="home" className="home-section">
      <h2>Hey, This is Jyothirmayi!</h2>
      <h1>WEB DEVELOPER</h1>
      <a
       href="/Btech_Jyothirmayi_.pdf"
       download="Jyothi_Resume.pdf"
       className="resume-btn"
      >
      Get Resume <i className="bi bi-download ms-2"></i>
      </a>

    </section>
  )
}

export default Home;