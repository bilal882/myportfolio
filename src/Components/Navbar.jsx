import React from 'react';
import { Link } from "react-router-dom";

export default function Navabr() {
  return (
    <div>
      <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link to="/" class="navbar-item" href="#">
            Muhammad Bilal Iqbal
          </Link> 

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/" class="navbar-item">
              Home
            </Link>

            <Link to="/about" class="navbar-item">
              About
            </Link>
            <Link to="/contact" class="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
