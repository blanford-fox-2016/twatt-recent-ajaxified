var express = require('express');
var router = express.Router();
var controller = require('../controller/controller.js')

//view tweet made by user
router.get('/twatt/mytweet', controller.mytweet)

//view tweet on user timeline
router.get('/twatt/timeline', controller.timeline)

//view mentions on user
router.get('/twatt/mentions', controller.mentions)

//view search by query
router.get('/twatt/search', controller.search)

//create new tweet
router.post('/twatt/update', controller.updateStatus)



module.exports = router;
