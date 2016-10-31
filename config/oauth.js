
'use strict'
const key = require('./key');
const OAuth = require('oauth');


module.exports = {
  access : (link, callback) => {
    let oauth = new OAuth.OAuth(
      key.REQUEST_TOKEN,
      key.ACCESS_TOKEN,
      key.CUSTOMER_KEY,
      key.CUSTOMER_SECRET,
      key.VERSION,
      null,
      key.KEYED_HASHED
    );
    oauth.get(
      link,
      key.USER_TOKEN,
      key.USER_SECRET,
      ((err, data, res) => {
        if (err) console.error(err);
        callback(data);
      })
    )
  }
}
