var express = require('express');
var router = express.Router();
var controller = require('../controllers/api')
var auth = require('../config/config')
var OAuth = require('oauth')


/* GET API */
router.get('/home', controller.getHomeAPI)

router.get('/search', controller.getSearchAPI)

router.get('/timeline', controller.getTimelineAPI)


module.exports = router;
