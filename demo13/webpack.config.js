var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery'],
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
     /*
    CommonsChunkPlugin now only takes a single argument. Either an options object *or* the name of the chunk.
    Example: if your old code looked like this:
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    You would change it to:
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    */
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'})
  ]
};
