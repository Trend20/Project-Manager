import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Manager</Link>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button> */}
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/">Register</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/projects">Projects</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/login">Logout</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;