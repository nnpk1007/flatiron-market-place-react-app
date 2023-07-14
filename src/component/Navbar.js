import React from "react";
import { Link } from "react-router-dom";

function Navbar({ loggedIn, handleLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 ">
      <Link
        className="navbar-brand"
        style={{
          fontSize: "50px",
          color: "blue",
          fontFamily: "'Lobster', cursive",
          fontWeight: 700,
        }}
        to="/listing"
      >
        FlatIron Market Place
      </Link>
      <ul className="nav nav-tabs mr-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/listing"
            style={{ fontSize: "24px", color: "purple" }}
          >
            Listing
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/add-item"
            style={{ fontSize: "24px", color: "purple" }}
          >
            Add Items
          </Link>
        </li>
        {/* if loggedin is true, then show Logout, if not, show Login*/}
        {loggedIn ? (
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              style={{ fontSize: "24px", color: "purple" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
              style={{ fontSize: "24px", color: "purple" }}
            >
              Login
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/sign-up"
            style={{ fontSize: "24px", color: "purple" }}
          >
            Create Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
