var express = require('express');
var config = require('../config/config')
var OAuth = require('oauth');
var Twit = require('twit')

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
      config.consumerkey,
      config.consumersecret,
      '1.0A',
      null,
      'HMAC-SHA1'
    )

var T = new Twit({
    consumer_key:         config.consumerkey,
    consumer_secret:      config.consumersecret,
    access_token:         config.token,
    access_token_secret:  config.secrettoken,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

module.exports = {
  Tweet: T,
// updateTweet:
 out:(url,callback) => {
    oauth.get(
          url,
          config.token, //test user token
          config.secrettoken, //test user secret
          function (e, data, res){
            if (e) console.error(e);
            callback(data);
            // done();
          })
        }
}
