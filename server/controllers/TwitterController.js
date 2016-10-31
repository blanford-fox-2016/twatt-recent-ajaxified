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
}
