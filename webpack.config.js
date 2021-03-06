const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
   loaders: [
     { test: /\.css$/, loader: "style!css" },
     { test: /\.scss$/, loader: "style!css!sass" },
     { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' }
   ]
 },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
}
