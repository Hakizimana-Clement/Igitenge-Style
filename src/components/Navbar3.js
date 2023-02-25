import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#dc3545" : "white",
    };
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-background">
        <div className="container-fluid navigation-Spacing">
          <Link className="navbar-brand navbar-brand-danger" to="/">
            Igitenge Style
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={navLinkStyles}
                  className="nav-link "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyles}
                  className="nav-link "
                  aria-current="page"
                  to="/gategories"
                >
                  Gategories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyles}
                  className="nav-link "
                  aria-current="page"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyles}
                  className="nav-link "
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={navLinkStyles}
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button className="  btn btn-danger btn-sale  ">
              <Link className=" text-light text-decoration-none" to="/">
                Sale
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
