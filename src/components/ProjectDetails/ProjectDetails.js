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
          }).catch(error =>console.log(error))

          console.log(this.state.projects);
  }
  render() {
    return (
      <div>
        <h1>Project List</h1>
      </div>
    );
  }
}

export default ProjectDetails;