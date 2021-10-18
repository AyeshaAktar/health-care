import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="nav-link active text-white" to="/home">
              Home
            </Link>
            <Link className="nav-link text-white" to="#service">
              Service
            </Link>
            <Link className="nav-link text-white" to="/about">
              About us
            </Link>
            <Link className="nav-link text-white" to="/blog">
              Blog
            </Link>
            <Link className="nav-link text-white" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;