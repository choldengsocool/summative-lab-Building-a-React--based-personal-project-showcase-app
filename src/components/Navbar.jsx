import React from 'react';

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
      <a href="#" style={linkStyles}>
        Home
      </a>
      <a href="#" style={linkStyles}>
        Inventory
      </a>
      <a href="#" style={linkStyles}>
        Admin
      </a>
      <a href="#" style={linkStyles}>
        Remove Product
      </a>
    </nav>
  );
}

export default Navbar;