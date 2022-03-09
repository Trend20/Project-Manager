import React, { Component } from 'react';
import axios from 'axios';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

class Project extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      url: '',
      type: '',
      repo: '',
      projects:[]
    }
  }

  // HANDLING NAME INPUT CHANGES

  handleNameInputChange = (event) =>{
    this.setState({
      name: event.target.value
    })
  }

  // HANDLING URL INPUT CHANGES

  handleUrlInputChange = (event) =>{
    this.setState({
      url: event.target.value
    })
  }

  // HANDLING TYPE INPUT CHANGES

  handleTypeInputChange = (event) =>{
    this.setState({
      type: event.target.value
    })
  }

  // HANDLING REPO INPUT CHANGES

  handleRepoInputChange = (event) =>{
    this.setState({
      repo: event.target.value
    })
  }

  // HANDLING FORM SUBMISSION
  onFormSubmission = (event) =>{
    
    event.preventDefault();

    const newProject = {
      name: this.state.name,
      url: this.state.url,
      type: this.state.type,
      repo: this.state.repo
    }

    console.log(newProject);

    axios.post('http://localhost:8000/project/add', newProject)
         .then((response) =>{
           this.setState({
             projects: response.data
           })
        }).catch(error => console.log('Error ' + error))
         
         this.setState({
          name: '',
          url: '',
          type: '',
          repo: ''
         })
  }

  render() {
    return (
      <div className='project'>
        <p className='mt-5'><b>Add your completed project by providing details below!!</b></p>
        <form onSubmit={this.onFormSubmission}>
        <div class="mb-3">
          <label for="name" class="form-label">Project Name</label>
          <input type="text" value={this.state.name} onChange={this.handleNameInputChange} class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Project Url</label>
          <input type="text" value={this.state.url} onChange={this.handleUrlInputChange} class="form-control" id="url" />
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Project Type</label>
          <input type="text" value={this.state.type} onChange={this.handleTypeInputChange} class="form-control" id="type" />
        </div>
        <div class="mb-3">
          <label for="repo" class="form-label">Project Repo</label>
          <input type="text" value={this.state.repo} onChange={this.handleRepoInputChange} class="form-control" id="repo" />
        </div>
        <button type="submit" class="btn btn-primary">Add Project</button>
      </form>

      <ProjectDetails projects={this.state.projects}/>
      </div>
    );
  }
}

export default Project;