import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UsersManagement.css";

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState({ id: null, username: "", password: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/users");
      setUsers(response.data.response || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSave = async () => {
    try {
      if (editUser.id) {
        await axios.put(`http://localhost:8082/api/users/${editUser.id}`, {
          username: editUser.username,
          password: editUser.password,
        });
      } else {
        await axios.post("http://localhost:8082/api/users/register", {
          username: editUser.username,
          password: editUser.password,
        });
      }

      setShowModal(false);
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-management">
      
      <div className="top-section">
        <button className="create-btn" onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-circle"></i> Create User
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
        </div>
      </div>

      
      <table className="users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(user)} title="Edit">
                  <i className="bi bi-pen"></i>
                </button>
                <button className="delete-btn" onClick={() => handleDelete(user.id)} title="Delete">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editUser.id ? "Edit User" : "Add User"}</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Username"
                value={editUser.username}
                onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={editUser.password}
                onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
              />
              <button className="save-btn" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersManagement;
