'use strict'
let key = require('../config/config.js');
let OAuth = require('oauth');
let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  key.consumer_key,
  key.consumer_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {
  getData: (link, cb) => {
    oauth.get(
      link,
      key.access_token,
      key.access_token_secret,
      (e, data, res) => {
        if (e) console.error(e);
        cb(data);
      });
  }
}
