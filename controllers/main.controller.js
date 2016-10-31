require('dotenv').config()

var Twitter = require('twitter');
var twitterAPI = require('node-twitter-api');

var oauth = require('oauth');

var _consumer_key = process.env.CONSUMER_KEY;
var _consumer_secret = process.env.CONSUMER_SECRET;
var _access_token_key = process.env.TOKEN_KEY;
var _access_token_secret = process.env.TOKEN_SECRET;

var twitter = new twitterAPI({
    consumerKey: _consumer_key,
    consumerSecret: _consumer_secret
});

module.exports = {
	showTimeline: showTimeline,
	showTimelineAPI: showTimelineAPI,
	searchTweet: searchTweet,
	searchTweetAPI: searchTweetAPI,
	tweet: tweet
}

function auth() {
  return new oauth.OAuth(
    "https://api.twitter.com/oauth/request_token", "https://api.twitter.com/oauth/access_token",
    _consumer_key, _consumer_secret, "1.0A", null, "HMAC-SHA1");
}

function showTimeline(req, res, next) {
  auth().get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name=tevinator12',
      _access_token_key,
      _access_token_secret,
      function (e, data, rest){
        if (e) console.error(e);
        var tweets = JSON.parse(data)
        res.render('index', { tweets: tweets });
      })
}

function showTimelineAPI(req, res, next) {
  auth().get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name=tevinator12',
      _access_token_key,
      _access_token_secret,
      function (e, data, rest){
        if (e) console.error(e);
        var tweets = JSON.parse(data)
        res.json(tweets);
      })
}

function searchTweet(req, res, next) {
  auth().get(
    'https://api.twitter.com/1.1/search/tweets.json?count=100&q='+req.body.kata,
      _access_token_key,
      _access_token_secret,
      function (e, data, rest){
        if (e) console.error(e);
        var tweets = JSON.parse(data)
        res.render('result', { tweets: tweets,q:req.body.kata });
      })
}

function searchTweetAPI(req, res, next) {
  auth().get(
    'https://api.twitter.com/1.1/search/tweets.json?count=100&q='+req.body.kata,
      _access_token_key,
      _access_token_secret,
      function (e, data, rest){
        if (e) console.error(e);
        var tweets = JSON.parse(data)
        res.render('result', { tweets: tweets,q:req.body.kata });
      })
}

function tweet(req, res, next) {
  twitter.statuses("update", {
        status: req.body.tweet
    },
    _access_token_key,
    _access_token_secret,
    function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/')
        }
    }
  )
}