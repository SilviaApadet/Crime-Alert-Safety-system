import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-links">

        <Link to="/"></Link>
        <Link to="/report">Report Form</Link>

        <Link to="/report">Report Crime</Link>

        <Link to="/reports">Report List</Link>
        <Link to="/chart">Report Chart</Link>
        <Link to="/alerts">Safety Alert</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;