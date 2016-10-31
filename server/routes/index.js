'use strict'
let express = require('express');
let router = express.Router();
let http = require('http');
let oauth = require('oauth');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Server on!')
});

module.exports = router;
