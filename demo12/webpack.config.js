var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /*
    CommonsChunkPlugin now only takes a single argument. Either an options object *or* the name of the chunk.
    Example: if your old code looked like this:
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    You would change it to:
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    */
    new CommonsChunkPlugin({name: "init"})
  ]
}
