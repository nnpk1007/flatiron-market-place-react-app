import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Listing from "./component/Listing";
import AddItem from "./component/AddItem";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Navbar from "./component/Navbar";

function App() {
  // state to track user logged in
  const [loggedIn, setLoggedIn] = useState(false);
  // state to track username, password, call
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [call, setCall] = useState("");
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
          console.log(user.username);
          console.log(user.call);
          setUsername(user.username);
          setCall(user.call);
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
    setCall("");
  };

  // Define a higher-order component (HOC) called requireAuth that takes a component as an argument.
  // The requireAuth function is used to conditionally render the provided component based on whether the user is logged in.
  const requireAuth = (Component) => {
    // checks the value of the loggedIn state. If loggedIn is true, meaning the user is logged in,
    // it renders the Component by using JSX syntax: <Component />. This means the component is rendered as is.
    // If loggedIn is false, indicating that the user is not logged in,
    // it renders the <Navigate /> component with the to prop set to "/login".
    return loggedIn ? (
      <Component username={username} call={call} />
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <Router>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Listing call={call} />} />
          <Route
            path="/listing"
            element={<Listing loggedIn={loggedIn} username={username} />}
          />
          <Route path="/add-item" element={requireAuth(AddItem)} />
          <Route
            path="/sign-up"
            element={
              <Signup
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                call={call}
                setCall={setCall}
              />
            }
          />
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/listing" />
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
