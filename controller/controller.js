'use strict'

const connection = require('../config/oauth');
const key = require('../config/key');
const Twit = require('twit');
var T = new Twit({
    consumer_key:         key.CUSTOMER_KEY,
    consumer_secret:      key.CUSTOMER_SECRET,
    access_token:         key.USER_TOKEN,
    access_token_secret:  key.USER_SECRET
    // optional HTTP request timeout to apply to all requests.
  })



module.exports = {
  homeTimeline : (req, res) => {
    connection.access("https://api.twitter.com/1.1/statuses/home_timeline.json", (data) => {
      res.json(JSON.parse(data));
    });

  },
  searchTweet : (req, res) => {
    connection.access(`https://api.twitter.com/1.1/users/search.json?q=${req.query.q}`, (data) => {
      res.json(JSON.parse(data));
    });
  },

  postTimeline : (req, res) => {
    var status_input = req.body.status;
    T.post('statuses/update', { status: status_input }, function(err, data, response) {
      console.log(data)
    })
  }

}
