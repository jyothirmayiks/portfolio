import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SkillsManagement.css";

const SkillsManagement = () => {
  const [skills, setSkills] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editSkill, setEditSkill] = useState({ id: null, name: "", image: null });
  const [imagePreview, setImagePreview] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSkills();
  }, []);

  
  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/skills");
      setSkills(response.data.response || []);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setEditSkill({ ...editSkill, image: file });

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  
  const handleEdit = (skill) => {
    setEditSkill({ id: skill.id, name: skill.name, image: null });

    if (skill.image) {
      setImagePreview(`data:image/png;base64,${skill.image}`);
    } else {
      setImagePreview("");
    }

    setShowModal(true);
  };

  
  const handleSave = async () => {
    try {
      if (!editSkill.name.trim()) {
        alert("Skill name is required");
        return;
      }

      const formData = new FormData();
      formData.append("name", editSkill.name);

      if (editSkill.image instanceof File) {
        formData.append("image", editSkill.image); 
      }

      console.log("FormData being sent:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      let response;
      if (editSkill.id) {
        console.log(`✏️ Updating skill with ID: ${editSkill.id}`);
        response = await axios.put(`http://localhost:8082/api/skills/${editSkill.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        console.log(" Creating new skill...");
        response = await axios.post("http://localhost:8082/api/skills", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      console.log("Server Response:", response.data);

      setShowModal(false);
      fetchSkills();
    } catch (error) {
      console.error(" Error saving skill:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
        alert(`Error: ${error.response.data.message || "Unknown error"}`);
      }
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/skills/${id}`);
      fetchSkills();
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <div className="skills-management">
      <div className="top-section">
        <button
          className="create-btn"
          onClick={() => {
            setEditSkill({ id: null, name: "", image: null });
            setImagePreview("");
            setShowModal(true);
          }}
        >
          <i className="bi bi-plus-circle"></i> Create Collection
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Skills"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="skills-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Skill Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills
            .filter((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((skill) => (
              <tr key={skill.id}>
                <td>
                  {skill.image ? (
                    <img
                      src={`data:image/png;base64,${skill.image}`}
                      alt="Skill Logo"
                      className="skill-logo"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>{skill.name}</td>
                <td>
                  <i
                    className="bi bi-pen action-icon edit-icon"
                    onClick={() => handleEdit(skill)}
                    title="Edit"
                  ></i>
                  <i
                    className="bi bi-trash3 action-icon delete-icon"
                    onClick={() => handleDelete(skill.id)}
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
              <h3>{editSkill.id ? "Edit Skill" : "Add Skill"}</h3>
              <span className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="input-field"
                placeholder="Skill Name"
                value={editSkill.name}
                onChange={(e) => setEditSkill({ ...editSkill, name: e.target.value })}
              />
              <input type="file" className="input-field" accept="image/*" onChange={handleImageChange} />
              {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
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

export default SkillsManagement;
