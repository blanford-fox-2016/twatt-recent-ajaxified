describe('OAuth1.0',function(){
    var OAuth = require('oauth');

    it('tests trends Twitter API v1.1',function(done){
        var oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            'KtMpYIznZhJeuvqLUHBJHJvi1',
            'zNnfNoFk0MZqa2fPnOFLy6RIcG7XZV1Lrtp0hOAvM0D3uh79yi',
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.get(
        'https://api.twitter.com/1.1/trends/place.json?id=23424977',
        '62780570-F27D3xjdziTf4eNGODZseM14HgaXFiWBccvlsu18Z', //test user token
        'R0Kl1qg4I4SaGpwh37K3MBnb0L3lIIr6VIjMQZzuPiffN', //test user secret
        function (e, data, res){
            if (e) console.error(e);
            console.log(require('util').inspect(data));
            done();
        });
    });
});