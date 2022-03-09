import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <Link className="navbar-brand ml-5" to="/">Manager</Link>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">Logout</Link>
            </li>
          </ul>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;