var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.jsx'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    // enable HMR on the server
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
  resolve: {
    //This option no longer requires passing an empty string. This behavior was moved to resolve.enforceExtension
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        include: path.join(__dirname, '.'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              // !important
              // We need to use ES2015 modules to make HMR work properly. To do this, set the module option to false in our es2015 preset.
              presets: [["es2015", {"modules": false}], 'react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
       }
    ]
  }
};
