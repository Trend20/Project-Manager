import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <h1>Manager</h1>
        </div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;