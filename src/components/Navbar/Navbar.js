import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="w-100" id="nav">
        <div  id='header'>
         <div className="logo">
          <img src="./logo2.png" alt="logo" />
         </div>
        <div id="navbarNav">
          <ul className="nav-container">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="active" to="/">Register</Link>
            </li>
            
            <li className="nav-item">
              <Link className="active" to="/login">Login</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;