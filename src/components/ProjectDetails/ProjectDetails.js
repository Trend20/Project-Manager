import React, { Component } from 'react';
import axios from 'axios';

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
            console.log(this.state.projects);
          }).catch(error =>console.log(error))
  }
  render() {
    return (
      <div className='mt-3'>
        <h1>Project List</h1>
        {
          this.state.projects.map(project =>
            <div class="card mt-3">
            <div class="card-body">
            <h5 class="card-title">{project.name}</h5>
            <p><a href="#">{project.url}</a></p>
            <p> <a href="#">{project.repo}</a></p>
            <p class="card-text">{project.type}</p>
          </div>
        </div>
        )
        }
      </div>
    );
  }
}

export default ProjectDetails;