'use strict'
const path = require('path')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackConfig = require('html-webpack-plugin')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  context: path.resolve('./demo'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve('./demo/dist'),
    filename: path.posix.join('static/js/[name].[chunkhash].js'),
    chunkFilename: path.posix.join('static/js/[name].[chunkhash].js')
  },
  devtool: '#source-map',
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackConfig({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      favicon: './favicon.ico'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minChunks: 1,
      name: () => {},
      cacheGroups: {
        index: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
})

module.exports = webpackConfig
