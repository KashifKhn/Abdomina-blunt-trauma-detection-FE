import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav rounded-pill p-3">
      <Link
        to="/home"
        className="navbar-brand">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              to="/upload"
              className="nav-link text-white">
              Upload
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/result"
              className="nav-link text-white">
              Result CT Scan
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/record"
              className="nav-link text-white">
              Find Record
            </NavLink>
          </li>
          {!auth && (
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link text-white">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
