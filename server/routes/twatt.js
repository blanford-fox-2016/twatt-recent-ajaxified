'use strict'
let express = require('express');
let router = express.Router();
let http = require('http');
let oauth = require('oauth');

let twitter = require('../controllers/TwitterController.js')

router.get('/my_timeline', twitter.getUserTimeline);
router.get('/home_timeline', twitter.getHomeTimeline);
router.get('/search', twitter.searchTweet);
router.post('/tweet', twitter.postTweet);

module.exports = router;
