const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: String,
  url: String,
  type: String,
  repo: String
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;