import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Listing from "./component/Listing";
import AddItem from "./component/AddItem";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
      <Link className="navbar-brand" style={{ fontSize: "30px", color: "blue" }} to="/">Used Items For Sale</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/listing">Listing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-item">Add Items</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li> */}
        </ul>
      </nav>
      <div className="container mt-4">
          <Switch>
            <Route exact path={["/", "/home", "/listing"]}>
              <Listing />
            </Route>
            <Route path="/add-item">
              <AddItem />
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App