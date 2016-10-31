'use strict'
var OAuth = require('oauth');
var config = require('../config/config.js')
var link_user = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
var link_home = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
var link_mention = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json'
var link_search = 'https://api.twitter.com/1.1/search/tweets.json?q='
var link_update = 'https://api.twitter.com/1.1/statuses/update.json?status='

let action = function(target_url, callback) {
    var oauth = new OAuth.OAuth('https://api.twitter.com/oauth/request_token', 'https://api.twitter.com/oauth/access_token', config.consumer_key, // consumerKey
            config.consumer_secret, // consumerSecret
            '1.0A', null, 'HMAC-SHA1');

    oauth.get(target_url, config.user_token, //test user token
            config.user_secret, //test user secret
            function(e, data, res) {
        if (e)
            console.error(e);
        callback(data)
    });
}

let actPost = function(value, target_url, callback) {
    var oauth = new OAuth.OAuth('https://api.twitter.com/oauth/request_token', 'https://api.twitter.com/oauth/access_token', config.consumer_key, // consumerKey
            config.consumer_secret, // consumerSecret
            '1.0A', null, 'HMAC-SHA1');

    oauth.post(target_url, config.user_token, //test user token
            config.user_secret, //test user secret
            value, 'text', function(e, data, res) {
        if (e)
            console.error(e);
        callback(data)
    });
}

module.exports = {
    mytweet: function(req, res, next) {
        action(link_user, function(data) {
            res.json(JSON.parse(data))
        })
    },
    timeline: function(req, res, next) {
        action(link_home, function(data) {
            res.json(JSON.parse(data))
        })
    },
    mentions: function(req, res, next) {
        action(link_mention, function(data) {
            res.json(JSON.parse(data))
        })
    },
    search: function(req, res, next) {
        console.log(req.query);
        console.log(req.body);
        action(link_search + req.body.q, function(data) {
            res.json(JSON.parse(data))
        })
    },
    updateStatus: function(req, res, next) {
        actPost(req.body.status, link_update + req.body.status, function(data) {
            res.json(JSON.parse(data))
        })
    }
}
