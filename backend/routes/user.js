const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const User = require('../models/user.model');

// get all the users
router.route('/').get((req, res) =>{
  User.find()
      .then(user => res.json(user))
      .catch(error => res.status(400).json('Error ' + error))
});

// get a specific user using id
router.route('/:id').get((req, res) =>{
  User.findById(req.params.id)
      .then((user) =>res.json(user))
      .catch(error => res.status(400).json('Error ' + error))
});

// add user
router.route('/add').post((req, res) =>{
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const profession = req.body.profession;

  const newUser = new User({username, email, password, profession});

  newUser.save()
         .then(() =>res.json('User added!!'))
         .catch(error => res.status(400).json('Error ' + error))
});

// update user
router.route('/update/:id').post((req, res) =>{
  User.findByIdAndUpdate(req.params.body)
      .then(user =>{
        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password
        user.profession = req.body.profession

        user.save()
            .then(() => res.json('User updated!!'))
            .catch(error => res.status(400).json('Error ' + error))
      }).catch(error => res.status(400).json('Error ' + error))
});

// delete user
router.route('/:id').delete((req, res) =>{
  User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted!!'))
      .catch(error => res.status(400).json('Error ' + error))
});

module.exports = router;