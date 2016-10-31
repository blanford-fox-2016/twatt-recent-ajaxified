var OAuth = require('oauth')
var Twit = require('twit')
var auth = require('../config/config')

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  auth.twitterAuth.consumerKey,
  auth.twitterAuth.consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var test = function (url, cb) {
  oauth.get(
    url,
    auth.twitterAuth.accessToken, // test user token
    auth.twitterAuth.accessTokenSecret, // test user secret
    function (e, data, res) {
      if (e)
        console.error(e);
      cb(data)
    });

}

var T = new Twit({
  consumer_key: auth.twitterAuth.consumerKey,
  consumer_secret: auth.twitterAuth.consumerSecret,
  access_token: auth.twitterAuth.accessToken,
  access_token_secret: auth.twitterAuth.accessTokenSecret,
})

module.exports = {

  //view
  getHome: function (req, res) {
    // var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.q
    var url = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
    test(url, function (data) {
      // console.log(data)
      res.render('index', {title: "Home", home:JSON.parse(data)})
    })
  },

  getSearch: function (req, res) {
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.q
    test(url, function (data) {
      // console.log(data)
      res.render('search', {title: "Search", search:JSON.parse(data)})
    })
  },


  getTimeline: function (req, res) {
    var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
    test(url, function (data) {
      // res.json(JSON.parse(data))
      res.render('timeline', {title: "Timeline", timeline:JSON.parse(data)})
    })
  },

  createStatus: function (req, res) {
    T.post('statuses/update', { status: req.body.status }, function(err, data, res) {

    })
    res.redirect('/')
  }

}
