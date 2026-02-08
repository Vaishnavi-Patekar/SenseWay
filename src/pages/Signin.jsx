import React from "react";
import "../styles/SignIn.css"; // reuse same CSS

const Signin = () => {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">SenseWay</h1>
        <p className="login-subtitle">
          Sign in to access Smart Blind Stick Dashboard
        </p>

        <form className="login-form">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />


   <label>Home Address</label>
          <input
            type="text"
            placeholder="Enter your Address"
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <p className="login-footer">
          Authorized caretakers & admins only
        </p>

      </div>
    </div>
  
  );
};

export default Signin;
