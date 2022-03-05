import React, { Component } from 'react';

class Project extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      url: '',
      type: '',
      repo: ''
    }
  }
  render() {
    return (
      <div className='project'>
        <form onSubmit={this.onFormSubmission}>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="username" value={this.state.username} onChange={this.handleUsernameInputChange} class="form-control" id="username" />
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
          <input type="profession" value={this.state.profession} onChange={this.handleProfessionInputChange} class="form-control" id="profession" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    );
  }
}

export default Project;