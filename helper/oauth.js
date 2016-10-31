var key_data = require('../helper/config')
var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
  key_data.request_token,
  key_data.access_token,
  key_data.consumer_key,
  key_data.application_secret,
  key_data.ver,
  key_data.null,
  key_data.algo
);

module.exports = {
  get_data_cb: function (url, callBack){
    oauth.get(
    url,
    '326746118-1kgr2KZmfbB3YDcM6ygd17OiZVEXX5dm6wT5IoDw', //test user token
    '7pg7iCTk1b4DgcGmA0qdJ4R5m0ck9FShh7yc4pG0WjJcR', //test user secret
    function (e, data, res){
      if (e) console.error(e);
      var show_data = JSON.parse(data)

      for (var i = 0; i < show_data.length; i++) {
        console.log(`${show_data[i].user.name} - @${show_data[i].user.screen_name}`);
        console.log(`${show_data[i].text}`);
        console.log(`--------------------------------`);
      }
      callBack(data)
    });
  }

}
