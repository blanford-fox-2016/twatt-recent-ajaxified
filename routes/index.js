var express = require('express');
var router = express.Router();
var controller = require('../controller/newTweetController')

// ============================================
// New Tweet
//=============================================
router.post('/add', controller.addNewTweet)

module.exports = router;
