import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    borderRadius: "9px",
    textAlign: "center"
  };

  return (
    <nav style={{ borderBottom: "2px solid #ccc", paddingBottom: "10px", marginBottom: "20px" }}>
      <NavLink to="/" style={linkStyles} end>
        Home
      </NavLink>
      <NavLink to="/admin" style={linkStyles}>
        Inventory
      </NavLink>
      <NavLink to="/add" style={linkStyles}>
        Admin
      </NavLink>
      <NavLink to="/remove" style={linkStyles}>
        Remove Product
      </NavLink>
    </nav>
  );
}

export default Navbar;