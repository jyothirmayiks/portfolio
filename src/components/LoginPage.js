import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      
      const response = await axios.post(
        "http://localhost:8082/api/users/login",
        loginData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      
      if (response.status === 200) {
        sessionStorage.setItem("portfolioUser", username);
        sessionStorage.setItem("isLoggedIn", "true");

        
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error);
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else {
        setErrorMessage("Something went wrong, please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box shadow-lg">
        <div className="left-box">
          <img src="/Authentication-pana (1).png" alt="Illustration" className="img-fluid" />
        </div>

        <div className="right-box text-center">
          {!showLogin ? (
            <>
              <h1 className="title">
                Welcome to <span>Jyothi.</span>
              </h1>
              <p className="tagline">Access the portfolio by signing in.</p>
              <button className="btn sign-in-btn" onClick={() => setShowLogin(true)}>Sign In</button>
            </>
          ) : (
            <form onSubmit={handleLogin} className="login-form">
              <h2>Login to Your Account</h2>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn w-100">Login</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
