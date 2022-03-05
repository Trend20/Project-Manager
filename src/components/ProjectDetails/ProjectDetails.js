import React, { Component } from 'react';
import axios from 'axios';

class ProjectDetails extends Component {

  constructor(props){
    super(props)
    this.state={
      projects: []
      // this.props.projects
    }
  }

  componentDidMount(){
     axios.get('http://localhost:8000/project')
          .then(response =>{
            this.setState({
              projects: response.data
            })
            console.log(this.state.projects);
          }).catch(error =>console.log(error))
  }
  render() {
    return (
      <div className='mt-3'>
        <h1>Project List</h1>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;