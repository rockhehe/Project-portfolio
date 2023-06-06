import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <NavLink to="/" className="navbar-brand">Personal portfolio</NavLink>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">
              <AiOutlineFundProjectionScreen /> Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
