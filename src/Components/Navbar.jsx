import React from 'react';

export default function Navabr() {
  return (
    <div>
      <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            Muhammad Bilal Iqbal
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
