const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller')

//routes
router.get('/', mainController.getTweets) 

router.get('/api/tweets', mainController.getTweetsAPI) 

router.post('/search', mainController.search) 

router.post('/tweet', mainController.tweet) 

module.exports = router