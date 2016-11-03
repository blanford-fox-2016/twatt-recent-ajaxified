var express = require('express');
var config = require('../config/config')
var connection = require('../config/helper');

module.exports = {
  //status timeline
  awal: function(req, res, next){
    let url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
    connection.out(url,(data)=>{
      var data_json = JSON.parse(data)
      res.render('index', {data_json:data_json})
    })
  },
  //status user
  getSearch:function(req, res, next){
    let url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.input
    connection.out(url,(data)=>{
      var data_json = JSON.parse(data)
      // res.json(JSON.parse(data))
      res.render('search', {data_json:data_json})
     })
  }
  //update status

}
