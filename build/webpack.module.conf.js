'use strict'
const path = require('path')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production'
})

module.exports = webpackConfig
