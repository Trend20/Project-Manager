import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className='login'>
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="username" class="form-control" id="username" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="mb-3">
          <label for="profession" class="form-label">Profession</label>
          <input type="profession" class="form-control" id="profession" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="check" />
          <label class="form-check-label" for="check">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    );
  }
}

export default Login;