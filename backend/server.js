const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');
const projectRoute = require('./routes/project');

const app = express();

// use middleware
app.use(cors());
app.use(express.json());


// ROUTES

app.use('/user', userRoute);
app.use('/project', projectRoute);

const PORT = process.env.PORT || 8000;

const url = process.env.DATABASE_URI;
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application connected to the DB!!');
})

app.listen(PORT, () =>{
  console.log(`Application listening on port ${PORT}`);
});

