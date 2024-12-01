import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = ({ onClose = () => {}, onLoginSuccess = () => {} }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/myapp/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        API_URL,
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setEmail("");
        setPassword("");
        setErrorMessage("");
        onLoginSuccess();
        navigate("/courses");
        onClose();
      }
    } catch (error) {
      console.error("Error during login:", error);
      const { response } = error;

      if (!response) {
        setErrorMessage("Network error. Please try again.");
      } else if (response.status === 401) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div
        className="auth-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="auth-modal-title">WELCOME BACK</h2>
        {errorMessage && <p className="auth-error-text">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-field">
            <div className="auth-label-wrapper">
              <label htmlFor="email" className="auth-label">
                Email:
              </label>
            </div>
            <input
              type="email"
              id="email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="auth-form-field">
            <div className="auth-label-wrapper">
              <label htmlFor="password" className="auth-label">
                Password:
              </label>
            </div>
            <input
              type="password"
              id="password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <a href="#" className="auth-forgot-link">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="auth-submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;