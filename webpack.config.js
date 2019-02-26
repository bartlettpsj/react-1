const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.bundled.html`,
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()//,
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({ sourceMap: true })]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    disableHostCheck: true
  },
  devtool: 'source-map', //'#source-map',   
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        query: {
          presets: ['@babel/preset-env', '@babel/react']
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        }
      }
    ]
  }
}