'use strict'
let AuthTwitter = require('../helpers/oauthTwitter.js');
module.exports = {

  getUserTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

    AuthTwitter.getData(link, (data) => {
      res.send(data);
    });
  },

  getHomeTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/home_timeline.json';

    AuthTwitter.getData(link, (data) => {
      res.send(data);
    });
  },

  postTweet: (req, res, next) => {
    let value = req.body.tweet;
    let link = `https://api.twitter.com/1.1/statuses/update.json?status=`;
    // res.send(value)
    // console.log(req.body);
    // console.log(value);
    AuthTwitter.postData(link, value, (data) => {
      console.log(data);
      data = JSON.parse(data).statuses;
      res.json(data);
    });
  }
}
