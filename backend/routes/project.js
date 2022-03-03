const express = require('express');
const router = express.Router();

const Project = require('../models/project.model');

// get all the projects
router.route('/').get((req, res) =>{
  Project.find()
      .then(project => res.json(project))
      .catch(error => res.status(400).json('Error ' + error))
});

// get a specific user using id
router.route('/:id').get((req, res) =>{
  Project.findById(req.params.id)
      .then((project) =>res.json(project))
      .catch(error => res.status(400).json('Error ' + error))
});

// add user
router.route('/add').post((req, res) =>{
  const name = req.body.name;
  const url = req.body.url;
  const type = req.body.type;
  const repo = req.body.repo;

  const newProject = new Project({name, url, type, repo});

  newProject.save()
         .then(() =>res.json('Project added!!'))
         .catch(error => res.status(400).json('Error ' + error))
});

// update project
router.route('/update/:id').post((req, res) =>{
  Project.findByIdAndUpdate(req.params.body)
      .then(project =>{
        project.name = req.body.name
        project.url = req.body.url
        project.type = req.body.type
        project.repo = req.body.repo

        project.save()
            .then(() => res.json('User updated!!'))
            .catch(error => res.status(400).json('Error ' + error))
      }).catch(error => res.status(400).json('Error ' + error))
});

// delete project
router.route('/:id').delete((req, res) =>{
  Project.findByIdAndDelete(req.params.id)
      .then(() => res.json('Project deleted!!'))
      .catch(error => res.status(400).json('Error ' + error))
});

module.exports = router;