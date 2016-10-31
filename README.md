# twatt

# install

```
{
  "name": "twatt",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "^4.13.4",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "oauth": "^0.9.14",
    "serve-favicon": "~2.3.0"
  }

}
```
#TREE
```
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   ├── config.js
│   └── helper.js
├── controller
│   ├── api.js
│   └── controler.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
|   └── index.html
├── routes
│   ├── api.js
│   └── index.js
└── views
    ├── error.ejs
    ├── error.jade
    ├── index.ejs
    └── search.ejs
```
#API

```
Using oauth Api twitter
```

Routes | HTTP | Description |
------------ | ------------- | ---------|
/api/status | GET |  Get user tweet
/api/update | POST |  POST update tweet


#using Api

-timeline (api)
```
https://localhost:3000/api/status
```

-search tweets  (api)

```
https://localhost:3000/api/search?q="name"
```
-update tweets
```
https://localhost:3000/api/update
```
### view client

```
  /public/index.html
```
