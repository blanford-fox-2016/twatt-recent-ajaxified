'use strict'
let AuthTwitter = require('../helpers/oauthTwitter.js');
module.exports = {
  getUserTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

    AuthTwitter.getData(link, (data) => {
      data = JSON.parse(data)
      res.render('my_timeline', { title: 'User Timeline', data });
    });
  },

  getHomeTimeline: (req, res, next) => {
    let link = 'https://api.twitter.com/1.1/statuses/home_timeline.json';

    AuthTwitter.getData(link, (data) => {
      data = JSON.parse(data)
      res.render('index', { title: 'Home Timeline', data });
    });
  },
}
