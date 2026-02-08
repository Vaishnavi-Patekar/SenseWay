import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">SenseWay</h1>
        <p className="login-subtitle">
          Smart Blind Stick Monitoring System
        </p>

        <form className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            required
          />

          <button type="submit" className="login-btn">
             Log In
          </button>
        </form>

        <p className="login-footer">
          Caretaker / Admin access only
        </p>

      </div>
    </div>
  );
};

export default Login;
