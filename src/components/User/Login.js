import axios from 'axios';
import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      email: '',
      password: '',
      profession: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/user')
         .then(response =>{
           console.log(response.data);
         })
  }

  // handle username input
  handleUsernameInputChange = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  // handle email input
  handleEmailInputChange = (event) =>{
    this.setState({
      email: event.target.value
    })
  }

  // handle password input
  handlePasswordInputChange = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  // handle profession input
  handleProfessionInputChange = (event) =>{
    this.setState({
      profession: event.target.value
    })
  }


  // handle form submission
  onFormSubmission = (event) =>{
    
    event.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      profession: this.state.profession
    }

    console.log(newUser);

    axios.post('http://localhost:8000/user/add', newUser)
         .then(res => console.log(res.data))

    
         this.setState({
          username: '',
          email: '',
          password: '',
          profession: ''
         })

         window.location ="/project"
  }


  render() {
    return (
      <div className='login'>
      <form onSubmit={this.onFormSubmission}>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameInputChange} class="form-control" id="username" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" value={this.state.email} onChange={this.handleEmailInputChange} class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" value={this.state.password} onChange={this.handlePasswordInputChange} class="form-control" id="password" />
        </div>
        <div class="mb-3">
          <label for="profession" class="form-label">Profession</label>
          <input type="text" value={this.state.profession} onChange={this.handleProfessionInputChange} class="form-control" id="profession" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    );
  }
}

export default Login;