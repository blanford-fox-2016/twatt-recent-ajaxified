require('dotenv').config()

const OAuth = require('oauth'),
    http = require('http'),
    twitterAPI = require('node-twitter-api')

const consumerKey = process.env.CONSUMER_KEY,
    consumerSecret = process.env.CONSUMER_SECRET,
    userToken = process.env.USER_TOKEN,
    userSecret = process.env.USER_SECRET

var twitter = new twitterAPI({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret
});

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    consumerKey,
    consumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
)

function getTweets(req, res) {
    oauth.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?count=10`,
        userToken, //test user token 
        userSecret, //test user secret             
        function(e, data, resj) {
            if (e) {
                console.error(e)
            } else {
                var result = JSON.parse(data)
                res.render('index', { my_tweet: result })
            }
        })
}

function getTweetsAPI(req, res) {
    oauth.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?count=10`,
        userToken, //test user token 
        userSecret, //test user secret             
        function(e, data, resj) {
            if (e) {
                console.error(e)
            } else {
                var tweets = JSON.parse(data)
                res.json(tweets)
            }
        })
}

function search(req, res, next) {
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?count=30&q=${req.body.word}`,
        userToken, //test user token 
        userSecret, //test user secret             
        function(e, data, resj) {
            if (e) {
                console.error(e)
            } else {
                var result = JSON.parse(data)
                res.render('search', { searched_word: result })
            }
        })
}

function tweet(req, res, next) {
    twitter.statuses("update", {
            status: req.body.tweet
        },
        userToken,
        userSecret,
        function(error, data, response) {
            if (error) {} else {
                res.redirect('/')
            }
        }
    );
}

module.exports = {
    getTweets: getTweets,
    getTweetsAPI: getTweetsAPI,
    search: search,
    tweet: tweet
}