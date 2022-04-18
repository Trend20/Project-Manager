import axios from 'axios';
import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      email: '',
      password: '',
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/user')
         .then(response =>{
           console.log(response.data);
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


  // handle form submission
  onFormSubmission = (event) =>{
    
    event.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log(newUser);

    axios.post('http://localhost:8000/user/add', newUser)
         .then(res => console.log(res.data))
         this.setState({
          email: '',
          password: '',
         })

         window.location ="/projects"
  }


  render() {
    return (
      <div className='login'>
        <p className='mt-5'>Login to start using <b>Manager</b>.</p>
      <form onSubmit={this.onFormSubmission}>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" value={this.state.email} onChange={this.handleEmailInputChange} class="form-control" id="email" required/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" value={this.state.password} onChange={this.handlePasswordInputChange} class="form-control" id="password" required
          maxLength={10} minLength={8}
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
    );
  }
}

export default Login;