const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api.routes');

//setup environment settings
require('dotenv').config();

// database
require('./config/db');


const app = express();
// json parsing - middlewares
app.use(express.json())

app.use(cors())

// add routes
app.use('/api', apiRoutes);




//running the server
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running --> http://localhost:" + port);
});

/**
 * package.json ?? npm init
 * install express ?? npm i express --save 
 * nodemon ?? npm i -g nodemon
 * mongoose ?? npm i mongoose --save
 * process.env ?? npm i dotenv --save
 * status-code ?? npm i http-status-codes --save
 * cors ?? npm i cors --save  // getting data from server <-> client 
 */