const fs = require('fs')
const path = require('path')
const compiler = require('vue-sfc-compiler')
const babel = require('babel-core')
const rm = require('rimraf')

const inputDir = path.join(__dirname, '../src')
const outputDir = path.join(__dirname, '../esModule')
const compilerOption = {
  babel: {
    extends: path.join(__dirname, '../.babelrc')
  }
}

const whiteListPath = /(theme)$/

function compile (inDir, outDir) {
  let fileList = fs.readdirSync(inDir)
  for (let file of fileList) {
    let absolutePath = path.join(inDir, file)
    let outAbsolutePath = path.join(outDir, file)
    if (fs.statSync(absolutePath).isFile()) {
      if (/\.vue$/.test(file)) {
        const source = fs.readFileSync(absolutePath, { encoding: 'utf-8' })
        fs.writeFileSync(outAbsolutePath.replace(/\.vue$/, '.js'), compiler(source, compilerOption).js)
      } else if (/\.js/.test(file)) {
        fs.writeFileSync(outAbsolutePath, babel.transformFileSync(absolutePath, compilerOption.babel).code)
      }
    } else if (!whiteListPath.test(file)) {
      fs.mkdirSync(outAbsolutePath)
      compile(absolutePath, outAbsolutePath)
    }
  }
}

console.log('\x1b[36m\x1b[1msrc/ → esModule/\x1b[22m\x1b[39m')
let startTime = new Date()
rm(outputDir, function () {
  fs.mkdirSync(outputDir)
  compile(inputDir, outputDir)
  console.log(`\x1b[32mcompile \x1b[1mesModule in ${new Date() - startTime}ms\x1b[22m\x1b[39m`)
})
