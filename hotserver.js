var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.hot.config');

var app = express();
var compiler = webpack(config);

// '/static/'
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'win', 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
