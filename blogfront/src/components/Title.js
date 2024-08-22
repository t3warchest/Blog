import React from "react";
import "./title.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.js";

function Title() {
  return (
    <div className="header">
      <nav className="title-nav-container">
        <NavLink to="/">Aruj Jain</NavLink>
      </nav>
      <Navbar />
    </div>
  );
}

export default Title;
