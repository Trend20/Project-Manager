const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');
const projectRoute = require('./routes/project');

const app = express();

require('dotenv').config();
const url = process.env.DB_URL;
mongoose.connect(url);
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application connected to the DB!!');
});

// use middleware
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/user', userRoute);
app.use('/project', projectRoute);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
  console.log(`Application listening on port ${PORT}`);
});

