import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FcGoogle} from 'react-icons/fc'
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <h3>Your Simple Project Manager!</h3>
        <h1>Your Projects. <span>Managed</span></h1>
        <button className='google-btn'>
          <FcGoogle 
             className="icon"
             style={{
               marginRight: "20px",
               cursor: "pointer",
               background: "#fff",
               borderRadius: "50%",
               padding: "5px"
             }}
             size="30px"
          /> 
          Continue with Google</button>
        <Link to="/register" className='email-link'>or sign up with your email address</Link>

        {/* hero image */}
        <div className="image">
          <img src="/img/hero2.png" alt="hero" />
        </div>
      </div>
    );
  }
}

export default Hero;