var webpack = require('webpack');

var config = {
  entry: {
    main: [
      "webpack-dev-server/client?http://localhost:8080",
      'webpack/hot/only-dev-server',
      './index.js'
    ]
  },

  node: {
    __dirname: true
  },

  output: {
    path: __dirname + '/public/',
    publicPath: '/public/',
    filename: 'bundle.js',
  },

  devServer: {
    inline: true,
    port: 8080
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      src: __dirname + '/src/',
      components: __dirname + '/src/components/',
      containers: __dirname + '/src/containers/',
    }
  }
}

module.exports = config;
