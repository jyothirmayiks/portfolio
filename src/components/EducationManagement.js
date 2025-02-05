import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EducationManagement.css";

const EducationManagement = () => {
  const [education, setEducation] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editEducation, setEditEducation] = useState({
    id: null,
    degree: "",
    institution: "",
    year: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEducation();
  }, []);

  
  const fetchEducation = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/education");
      setEducation(response.data.response || []);
    } catch (error) {
      console.error(" Error fetching education data:", error);
    }
  };

  
 const handleEdit = (educationItem) => {
  setEditEducation({
    id: educationItem.id,
    degree: educationItem.degree,
    institution: educationItem.institution,
    year: educationItem.year,
  });
  setShowModal(true);
};


  
  const handleSave = async () => {
    try {
      if (!editEducation.degree.trim() || !editEducation.institution.trim() || !editEducation.year.trim()) {
        alert("All fields are required!");
        return;
      }
  
      const formData = new FormData();
      formData.append("degree", editEducation.degree);
      formData.append("institution", editEducation.institution);
      formData.append("year", editEducation.year);
  
      let response;
      if (editEducation.id) {
        console.log(`✏️ Updating education with ID: ${editEducation.id}`);
        response = await axios.put(
          `http://localhost:8082/api/education/${editEducation.id}`, 
          formData, 
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        console.log("Creating new education...");
        response = await axios.post("http://localhost:8082/api/education", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
  
      console.log("Server Response:", response.data);
      setShowModal(false);
      fetchEducation();
    } catch (error) {
      console.error(" Error saving education data:", error);
      if (error.response) {
        console.error(" Server Response:", error.response.data);
        alert(`Error: ${error.response.data.message || "Unknown error"}`);
      }
    }
  };
  
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/education/${id}`);
      fetchEducation();
    } catch (error) {
      console.error("Error deleting education data:", error);
    }
  };

  return (
    <div className="education-management">
      <div className="top-section">
        <button
          className="create-btn"
          onClick={() => {
            setEditEducation({ id: null, degree: "", institution: "", year: "" });
            setShowModal(true);
          }}
        >
          <i className="bi bi-plus-circle"></i> Create Education
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Education"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="education-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {education
            .filter((edu) =>
              edu.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
              edu.institution.toLowerCase().includes(searchTerm.toLowerCase())||
              edu.year.toLowerCase().includes(searchTerm.toLowerCase())
)
            
            .map((edu) => (
              <tr key={edu.id}>
                <td>{edu.degree}</td>
                <td>{edu.institution}</td>
                <td>{edu.year}</td>
                <td>
                  <i
                    className="bi bi-pen action-icon"
                    onClick={() => handleEdit(edu)}
                    title="Edit"
                  ></i>
                  <i
                    className="bi bi-trash3 action-icon"
                    onClick={() => handleDelete(edu.id)}
                    title="Delete"
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editEducation.id ? "Edit Education" : "Add Education"}</h3>
              <span className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="input-field"
                placeholder="Degree"
                value={editEducation.degree}
                onChange={(e) => setEditEducation({ ...editEducation, degree: e.target.value })}
              />
              <input
                type="text"
                className="input-field"
                placeholder="Institution"
                value={editEducation.institution}
                onChange={(e) => setEditEducation({ ...editEducation, institution: e.target.value })}
              />
              <input
                type="text"
                className="input-field"
                placeholder="Year"
                value={editEducation.year}
                onChange={(e) => setEditEducation({ ...editEducation, year: e.target.value })}
              />
            </div>
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationManagement;
