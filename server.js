var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var webpackConfig = require('./webpack.config');
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackDevMiddleware = require("webpack-dev-middleware");

(function() {

  var webpack = require('webpack');
  var compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  app.use(express.static('static'));

  app.get("*", function(req, res) {
    res.sendFile(__dirname + '/index.dev.html');
  });

  app.listen(port, '0.0.0.0', function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at http://localhost: ' + port);
  });
})();
