const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const nib = require('nib')

const outputDirectory = 'dist'

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [nib()],
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 7001,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:7002'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
