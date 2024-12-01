import React from "react";
import "./Sign.css"; // Ensure to import the updated CSS

const Signup = ({ onClose }) => {
  return (
    <div className="signup-popup" onClick={onClose}>
      <div className="signup-container" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="signup-title">CREATE AN ACCOUNT</h2>
        <p className="signup-text">Learn on your own time from top universities and businesses.</p>
        <form>
          <div className="input-group">
            <label className="input-label">Username:</label>
            <input type="text" className="input-field" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label className="input-label">Email:</label>
            <input type="email" className="input-field" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label className="input-label">Password:</label>
            <input type="password" className="input-field" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signup-button">Join for Free</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
