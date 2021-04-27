import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <Router>
      <div className="nav">
        <ul class="nav nav-tabs">
          <li class="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-link">
            <Link to="/">Gallery</Link>
          </li>
          <li class="nav-link">
            <Link to="/">Contact</Link>
          </li>
          <li class="nav-link">
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default Nav;
