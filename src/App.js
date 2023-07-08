import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
      <Link className="navbar-brand" style={{ fontSize: "30px", color: "blue" }} to="/">Old Stuff For Sale</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/listing">Listing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-stuff">Add Stuff</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li> */}
        </ul>
      </nav>
      <div className="container mt-4">
          <Switch>
            <Route exact path={["/", "/home"]}>
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App