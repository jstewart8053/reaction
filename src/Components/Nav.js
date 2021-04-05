import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <div className="nav">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Gallery
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
