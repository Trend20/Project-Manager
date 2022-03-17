import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class ProjectDetails extends Component {

  constructor(props){
    super(props)
    this.state={
      projects: []
    }
  }

  componentDidMount(){
     axios.get('http://localhost:8000/project')
          .then(response =>{
            this.setState({
              projects: response.data
            })
            this.props.updateProjectList();
          }).catch(error =>console.log(error))
  }
  
  render() {
    return (
      <div className='mt-5'>
        <h1>Project List</h1>
       <div className='project-container'>
       {
          this.state.projects.map(project =>
            <div class="card mt-3">
            <div class="card-body">
            <h5 class="card-title">{project.name}</h5>
            <p><Link to="{project.url}">{project.url}</Link></p>
            <p><Link to="{project.repo}">{project.repo}</Link></p>
            <p class="card-text">{project.type}</p>
          </div>
        </div>
        )
        }
       </div>
      </div>
    );
  }
}

export default ProjectDetails;