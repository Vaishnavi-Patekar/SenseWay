import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";


const Navbar = () => {
  return (
     <nav
      className="navbar"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* LEFT - App Name */}
      <div className="navbar-left">
        <h1 className="app-title">SenseWay</h1>
       
      </div>

      {/* CENTER - Navigation Links */}
      <ul className="navbar-center">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tracking">Live Tracking</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
        <li><Link to="/signin">SignIn</Link></li>

      </ul>

      {/* RIGHT - User Actions */}
      <div className="navbar-right">
        <button
          className="sos-btn"
          aria-label="Emergency SOS"
        >
          🚨 SOS
        </button>

        <div className="profile-menu">
             <button className="login-btn">
          <Link to="/login">Login</Link>
        </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar