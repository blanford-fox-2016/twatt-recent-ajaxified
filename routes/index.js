var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main.controller')

router.get('/', mainController.showTimeline) 
router.get('/api/timeline', mainController.showTimelineAPI) 
router.post('/result', mainController.searchTweet) 
router.post('/api/result', mainController.searchTweetAPI) 
router.post('/ngetweet', mainController.tweet) 

module.exports = router;