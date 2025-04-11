import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Crime Alert System</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/report">Report Crime</Link>
        <Link to="/reports">View Reports</Link>
        <Link to="/analysis">Crime Analysis</Link>
        <Link to="/alerts">Safety Alerts</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;