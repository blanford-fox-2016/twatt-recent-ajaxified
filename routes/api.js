var express = require('express');
var router = express.Router();
var controller = require('../controller/APIController')

// ============================================
// API
//=============================================
router.get('/home', controller.getHome)

router.get('/timeline', controller.getTimeline)

module.exports = router;
