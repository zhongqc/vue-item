'use strict'
const path = require('path')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const isMinify = false

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'vue-item',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  optimization: {
    minimize: isMinify
  }
})

module.exports = webpackConfig
