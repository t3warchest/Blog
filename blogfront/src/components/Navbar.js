import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/poetry" className="nav__link">
              Poetry
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link">
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/blogs" className="nav__link">
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
