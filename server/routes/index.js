
var express = require('express');
var router = express.Router();
var controllerV = require('../controller/controller_view.js')

router.get('/', controllerV.timeline)

router.get('/mentions', controllerV.mentions)

router.get('/mytweet', controllerV.mytweet)

router.get('/search', controllerV.search)

router.post('/update', controllerV.updateStatus)



module.exports = router
