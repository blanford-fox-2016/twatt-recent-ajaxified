'use strict'
//----------------------------------------------------------
// Node Modules
//----------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const oauth = require('oauth');

// express instance
const app = express();
const router = express.Router();

//----------------------------------------------------------
// Node Modules
//----------------------------------------------------------
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

//app.set('view engine', 'jade')

//----------------------------------------------------------
// Routing
//----------------------------------------------------------


//----------------------------------------------------------
// Register Router
//----------------------------------------------------------
//app.get('/', index);
const twitt = require('./controller/controller');
app.get('/', twitt.homeTimeline)


//----------------------------------------------------------
// Run the app
//----------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is running on port ', port);
});
