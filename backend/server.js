const express = require('express');
const cors = require('cors');

const app = express();

// use middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
  console.log(`Application listening on port ${PORT}`);
});

