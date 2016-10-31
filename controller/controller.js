'use strict'

const connection = require('../config/oauth');

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
  }
}
