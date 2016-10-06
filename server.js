var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var webpackConfig = require('./webpack.config');

(function() {

  var webpack = require('webpack');
  var compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(express.static('static'));

  app.use(require("webpack-hot-middleware")(compiler));


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
