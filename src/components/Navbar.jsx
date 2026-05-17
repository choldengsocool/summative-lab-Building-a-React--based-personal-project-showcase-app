import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar({ currentUser, onLogout, cartCount }) {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Home
      </NavLink>
      <NavLink to="/shop" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Shop
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Cart{cartCount ? ` (${cartCount})` : ''}
      </NavLink>
      <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Inventory
      </NavLink>
      <NavLink to="/add" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Add Product
      </NavLink>
      {currentUser && (
        <button type="button" className="btn btn-secondary logout-button" onClick={onLogout}>
          Logout {currentUser.username}
        </button>
      )}
    </nav>
  );
}

export default Navbar;