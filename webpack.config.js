const path = require('path');

module.exports = {
  entry: './client/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, '/')
    },
    devMiddleware: {
      publicPath: '/build/'
    },
    // proxy: {
    //   '/': 'http://localhost:3000/'
    // },
  }
}
