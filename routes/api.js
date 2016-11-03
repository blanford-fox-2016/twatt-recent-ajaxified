var express = require('express');
var router = express.Router();
var api = require('../controller/api');
/* GET users listing. */

router.get('/status',api.getStatusApi);
router.get('/search',api.getuserApi);
router.post('/update',api.getUpdateTweet);


module.exports = router;
