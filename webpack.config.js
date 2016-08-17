module.exports = {
  entry: './psMovies/app.js',
  output: {
    path: './',
    filename: 'app.bundle.js'
  },
  devServer: {
    noInfo: true,
    inline:true,
    contentBase: './',
    host:'0.0.0.0',
    port: 3000
},
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
