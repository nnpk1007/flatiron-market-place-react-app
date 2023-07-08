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

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
        <Link
          className="navbar-brand"
          style={{ fontSize: "30px", color: "blue" }}
          to="/"
        >
          Used Items For Sale
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/listing">
              Listing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-item">
              Add Items
            </Link>
          </li>
          {/* if loggedin is true, then show Logout, if not, show Login*/}
          {loggedIn ? (
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route
            path="/login"
            element={
              loggedIn ? <Navigate to="/" /> : (
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin}
                error={error}
              />)
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <Navigate to="/listing" />;
}

export default App;
