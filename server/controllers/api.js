var OAuth = require('oauth')
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

module.exports = {
    //API

    getHomeAPI: function (req, res) {
        // var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.q
        var url = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
        test(url, function (data) {
            res.json(JSON.parse(data))
        })
    },

    getSearchAPI: function (req, res) {
        var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + req.query.q
        test(url, function (data) {
            res.json(JSON.parse(data))
        })
    },


    getTimelineAPI: function (req, res) {
        var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
        test(url, function (data) {
            res.json(JSON.parse(data))
        })
    }

}
