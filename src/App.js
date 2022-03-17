import React, { Component } from 'react'
import Project from './components/Project/Project';
import Login from './components/User/Login';
import Register from './components/User/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cookies from 'js-cookie'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      isLoggedIn: false
    }
  }

  componentDidMount() {
    const token = Cookies.get("token") ? Cookies.get("token") : null;
    if (token) {
      this.setState({ "isLoggedIn": true });
    }
  }

  globalLogin = () => {
    this.setState({ "isLoggedIn": true });
  }
  globalLogout = () => {
    this.setState({ "isLoggedIn": false });
  }

  render() {

    const LoginIntermediate = (props) => {
      return (
        <Login {...props} globalLogin={this.globalLogin}/>
      )
    } 
    return (
      <Router>
     <Navbar isLoggedIn={this.state.isLoggedIn} globalLogout={this.globalLogout}/>
      <div className="container mt-5">
      <div className="header mt-3">
        <h3>Welcome to Manager!!</h3>
        <p><b>Manager</b> is a web application that helps you manage your projects. It will help you keep track of all your completed project.</p>
        </div>
      <Routes>
         <Route path="/" element={<Register />} />
         <Route path="/login" exact element={<LoginIntermediate />} />
         <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
   </Router>
    );
  }
}

export default App;