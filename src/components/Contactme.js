import React, { useState } from "react";
import "./Contactme.css";
import axios from "axios";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [status, setStatus] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); 

    try {
      
      const response = await axios.post("http://localhost:8080/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Error sending message:", error.response || error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-left">
          <h2 className="contact-title">Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>

        <div className="contact-right">
          <h3>Get In Touch</h3>
          <p>
            Email: <a href="mailto:jothirmayiks@gmail.com">jothirmayiks@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+919562222500">+91 9562222500</a>
          </p>
          <p>Location: Thrissur, Kerala, India</p>
          <div className="contact-icons">
            <a
              href="https://github.com/jyothirmayiks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jyothirmayi-k-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://x.com/jyothik05?t=F9t7GAhNHDC0EYoLvUcO4g&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;