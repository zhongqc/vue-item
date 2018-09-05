'use strict'
const path = require('path')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackConfig = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    rules: [{
      test: /\.(scss|sass)$/,
      include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../demo')],
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../demo')]
    }]
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
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: 'css/[name].[chunkhash:12].css'
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
