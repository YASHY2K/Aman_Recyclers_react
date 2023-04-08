import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-success" role="navigation">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="navbar-brand-img">
            <img src="/Images/Logo2.svg" alt="Logo" width="150" height="50" className="d-inline-block align-text-top" />
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Toggle navigation</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Meet the Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
