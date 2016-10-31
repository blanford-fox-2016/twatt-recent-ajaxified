var config = require('../config/config')
var Twit = require('twit')

module.exports = {
  addNewTweet: addNewTweet,
  viewIndex: viewIndex
}

var T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
})


function addNewTweet(req, res, next){
  T.post('statuses/update', { title: 'twatt-new', status: req.body.input_tweet }, function(err, data, response) {
    console.log(data)
    res.redirect('/')
  })
}

function viewIndex(req, res, next){
  res.render('index', {title: 'twatt-new'})
}
