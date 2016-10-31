var config = require('../helper/config')
var Twit = require('twit')
var viewTimeline = require('../controller/APIController')

module.exports = {
  addNewTweet: addNewTweet
}

var T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.application_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret,
  timeout_ms: 60*1000,
})


function addNewTweet(req, res, next){
  console.log("masuk neh dari server");
  var input = req.body.input
  console.log(input);

  T.post('statuses/update', { title: 'Tweet', status: input }, function(err, data, response) {
    viewTimeline.getTimeline(req, res, next)
  })
}
