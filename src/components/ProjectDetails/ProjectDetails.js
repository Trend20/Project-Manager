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
            <p class="card-title"><span>Project Name:</span>{project.name}</p>
            <p><span>Project Url:</span> <Link to="{project.url}">{project.url}</Link></p>
            <p><span>Project Repo:</span> <Link to="{project.repo}">{project.repo}</Link></p>
            <p class="card-text"><span>Project Type:</span> {project.type}</p>
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