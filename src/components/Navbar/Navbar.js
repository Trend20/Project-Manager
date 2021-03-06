import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/" className='logo-text'>
            <img src="logo3.png" alt="logo" />
          </Link>
        </div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/login" className='nav-link'>Log In</Link>
            </li>
            <li>
              <Link to="/register" className='nav-link' id="signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;