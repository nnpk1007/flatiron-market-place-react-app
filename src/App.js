import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Listing from "./component/Listing";
import AddItem from "./component/AddItem";
import Login from "./component/Login";

function App() {
  // state to track user logged in
  const [loggedIn, setLoggedIn] = useState(false);
  // state to track username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // state error if username or password is valid or invalid
  const [error, setError] = useState("");

  const handleLogin = () => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => {
        const user = data.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          setLoggedIn(true);
          setError("");
        } else {
          setLoggedIn(false);
          setError("Invalid username or password");
        }
      });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // Define a higher-order component (HOC) called requireAuth that takes a component as an argument.
  // The requireAuth function is used to conditionally render the provided component based on whether the user is logged in.
  const requireAuth = (Component) => {
    // checks the value of the loggedIn state. If loggedIn is true, meaning the user is logged in,
    // it renders the Component by using JSX syntax: <Component />. This means the component is rendered as is.
    // If loggedIn is false, indicating that the user is not logged in,
    // it renders the <Navigate /> component with the to prop set to "/login".
    return loggedIn ? <Component /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
        <Link
          className="navbar-brand"
          style={{
            fontSize: "50px",
            color: "blue",
            fontFamily: "'Lobster', cursive",
            fontWeight: 700,
          }}
          to="/"
        >
          Used Items For Sale
        </Link>
        <ul className="navbar-nav mr-auto">
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
        </ul>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/listing" element={<Listing loggedIn={loggedIn} />} />
          <Route path="/add-item" element={requireAuth(AddItem)} />
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  error={error}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
