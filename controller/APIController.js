var connect_data = require('../helper/oauth')

module.exports = {
  // ============================================
  // API
  //=============================================
  getHome: function(req, res, next){
    var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
    connect_data.get_data_cb(url, function(data){
      res.json(JSON.parse(data))
    })
  },
  getTimeline: function(req, res, next){
    var url = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
    connect_data.get_data_cb(url, function(data){
      res.json(JSON.parse(data))
    })
  }
}
