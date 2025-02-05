import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectManagement.css";

const ProjectsManagement = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProject, setEditProject] = useState({
    title: "",
    description: "",
    description1: "",
    description2: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/projects");
      setProjects(response.data.response || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    }
  };

  const handleEdit = (project) => {
    setEditProject(project);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleSave = async () => {
    try {
      if (!editProject.title.trim() || !editProject.description.trim()) {
        alert("Title and description are required!");
        return;
      }

      let response;
      if (editProject.id) {
        console.log(`Updating project with ID: ${editProject.id}`);
        response = await axios.put(
          `http://localhost:8082/api/projects/${editProject.id}`,
          editProject
        );
      } else {
        console.log("Creating new project...");
        response = await axios.post("http://localhost:8082/api/projects", editProject);
      }

      console.log("Project saved successfully:", response.data);
      setShowModal(false);
      fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
        alert(`Error: ${error.response.data.message || "Unknown error"}`);
      }
    }
  };

  return (
    <div className="projects-management">
      <div className="top-section">
        <button
          className="create-btn"
          onClick={() => {
            setEditProject({
              title: "",
              description: "",
              description1: "",
              description2: "",
            });
            setShowModal(true);
          }}
        >
          <i className="bi bi-plus-circle"></i> Create Project
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="projects-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Description2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects
            .filter(
              (project) =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((project) => (
              <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.description2}</td>
                <td>
                  <i
                    className="bi bi-pen action-icon"
                    onClick={() => handleEdit(project)}
                    title="Edit"
                  ></i>
                  <i
                    className="bi bi-trash3 action-icon"
                    onClick={() => handleDelete(project.id)}
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
              <h3>{editProject.id ? "Edit Project" : "Add Project"}</h3>
              <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="input-field"
                placeholder="Project Title"
                value={editProject.title}
                onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
              />
              <textarea
                className="input-field"
                placeholder="Project Description"
                value={editProject.description}
                onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
              />
              <textarea
                className="input-field"
                placeholder="Description 2"
                value={editProject.description2}
                onChange={(e) => setEditProject({ ...editProject, description2: e.target.value })}
              />
            </div>
            <button className="save-btn" onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsManagement;
