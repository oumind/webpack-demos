var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    //The compress.warnings option of the UglifyJsPlugin now defaults to false instead of true.
    //This means that if you want to see uglifyjs warnings, you need to set compress.warnings to true.
    new uglifyJsPlugin()
  ]
}
