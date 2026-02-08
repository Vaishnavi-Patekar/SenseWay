import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="hero-title">SenseWay</h1>
        <p className="hero-subtitle">
          Smart Blind Stick Safety & Monitoring System
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Go to Dashboard</button>
          <button className="sos-btn">🚨 Emergency SOS</button>
        </div>
      </section>

      {/* LIVE STATUS */}
      <section className="status-section">
        <h2>Live Status</h2>

        <div className="status-cards">
          <div className="card">
            <h3>User Status</h3>
            <p>Active</p>
            <span>Last updated: 2 min ago</span>
          </div>

          <div className="card">
            <h3>Last Known Location</h3>
            <p>Pune, Maharashtra</p>
            <span>GPS Signal: Strong</span>
          </div>

          <div className="card">
            <h3>Stick Health</h3>
            <p>Battery: 78%</p>
            <span>Sensors: Working</span>
          </div>

          <div className="card alert">
            <h3>Recent Alert</h3>
            <p>No active alerts</p>
            <span>All safe</span>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>

        <div className="action-buttons">
          <button>📍 Track Live Location</button>
          <button>📞 Call Caretaker</button>
          <button>🔊 Voice Assistance</button>
          <button>📄 View Reports</button>
        </div>
      </section>

      {/* ACTIVITY SUMMARY */}
      <section className="activity">
        <h2>Today’s Activity</h2>

        <div className="activity-cards">
          <div className="card">
            <h3>Distance Walked</h3>
            <p>2.3 km</p>
          </div>

          <div className="card">
            <h3>Obstacles Detected</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Water Alerts</h3>
            <p>3</p>
          </div>

          <div className="card">
            <h3>Battery Usage</h3>
            <p>22%</p>
          </div>
        </div>
      </section>

      {/* ML INSIGHTS */}
      <section className="ml-insights">
        <h2>Smart Insights</h2>

        <ul>
          <li>⚠️ High obstacle area detected near Market Road</li>
          <li>💧 Frequent water detection near bus stop</li>
          <li>🧭 Frequently visited locations: Home, Park</li>
        </ul>
      </section>

    </div>
  );
};

export default Home;
