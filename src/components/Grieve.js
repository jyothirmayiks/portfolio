import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios"; 
import "./ProjectPageCss.css";

const HomeAutomation = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);
  const [imageUrls, setImageUrls] = useState([]); 
  const projectId = "b932a301-2585-47c0-bdfe-e87b4ac2007a"; 

  useEffect(() => {
    axios.get(`http://localhost:8080/api/projects/${projectId}`)
      .then((response) => {
        const data = response.data.response;
        setProjectData(data);

        
        if (data.images) {
          const urls = data.images.map(base64 => `data:image/jpeg;base64,${base64}`);
          setImageUrls(urls);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the project data!", error);
      });

    window.scrollTo(0, 0);
  }, []);

  const goToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-automation-page">
      

      <header className="page-header">
        <h1>{projectData.title}</h1>
      </header>

      <div className="content">
        <p>{projectData.description1}</p>

        <h2>{projectData.heading}</h2>

        <Slider {...sliderSettings} className="hardware-slider">
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Hardware Setup ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>

        <p>{projectData.description2}</p>
      </div>

    </div>
  );
};

export default HomeAutomation;
