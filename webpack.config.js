var path = require('path');

var assetPath = path.resolve(__dirname, 'dist');

// Set default webpack config for all environments
var config = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path:       assetPath,
    publicPath: '/assets/',
    filename:   'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css/, loader: 'style!css' }
    ]
  }
}

// Set specific options for development
if( !process.env.NODE_ENV || process.env.NODE_ENV == 'development' ) {
  config.devServer = {
    inline:      true,      // don't use iframe because we want to proxy requests
    contentBase: assetPath, // specify content base without needing command line options
  };
}

module.exports = config;
