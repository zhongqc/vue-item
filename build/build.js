'use strict'

/**
 * @author: zhongqc
 * @date: 2018/03/03
 * @description: 执行webpack配置，进行文件编译
 * @arguments: 1. 配置文件名，可传相对路径
 */

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')

const webpackConfigFileName = process.argv[2] || 'webpack.module.conf'

const webpackConfig = require(`./${webpackConfigFileName}`)

const spinner = ora('building...')
spinner.start()

const outputDir = path.relative(path.dirname(__dirname), webpackConfig.output.path)

const demoDistPath = path.resolve(`./${outputDir}`)

rm(demoDistPath, rmCallback)

function rmCallback (err) {
  if (err) throw err
  webpack(webpackConfig, compileCallback)
}

function compileCallback (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('  Build complete.\n'))
}
