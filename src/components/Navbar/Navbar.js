import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Projects</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/logout">Logout</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;