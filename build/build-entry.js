const fs = require('fs')
const path = require('path')
const upperCamelCase = require('uppercamelcase')
const version = require('../package.json').version

function getComponentsFileList () {
  const whiteList = /(theme)|(index.js)$/
  let componentsFileList = fs.readdirSync(path.join(__dirname, '../src'))
  componentsFileList = componentsFileList.filter(file => !whiteList.test(file))
  return componentsFileList
}

function buildJSEntry () {
  console.log('\x1b[36m\x1b[1mbuild src/index.js/\x1b[22m\x1b[39m')
  let startTime = new Date()

  let componentsFileList = getComponentsFileList()
  let componentsList = []
  let importList = []
  for (let component of componentsFileList) {
    let componentName = upperCamelCase(component)
    componentsList.push(componentName)
    importList.push(`import ${componentName} from './${component}/index'`)
  }

  const indexJsFile = `${importList.join('\n')}

const Components = [
  ${componentsList.join(',\n  ')}
]

const VueItem = {
  install (Vue, options = {}) {
    Components.map(component => {
      Vue.component(component.name, component)
    })
  },
  version: '${version}',
  ${componentsList.join(',\n  ')}
}

if (window && window.Vue) {
  window.Vue.use(VueItem)
}

export default VueItem
`

  fs.writeFileSync(path.join(__dirname, '../src/index.js'), indexJsFile)

  console.log(`\x1b[32mbuild \x1b[1msrc/index.js complete in ${new Date() - startTime}ms\x1b[22m\x1b[39m`)
}

function buildScssEntry () {
  console.log('\x1b[36m\x1b[1mbuild src/theme/index.scss/\x1b[22m\x1b[39m')
  let startTime = new Date()

  const whiteList = /(index.scss)|(reset.scss)|(mixin.scss)|(var.scss)$/
  let scssFileList = fs.readdirSync(path.join(__dirname, '../src/theme'))
  scssFileList = scssFileList.filter(file => !whiteList.test(file))
  let importList = []
  for (let scss of scssFileList) {
    importList.push(`@import './${scss}';`)
  }
  const indexScssFile = `@import './reset.scss';

${importList.join('\n')}
`

  fs.writeFileSync(path.join(__dirname, '../src/theme/index.scss'), indexScssFile)

  console.log(`\x1b[32mbuild \x1b[1msrc/theme/index.scss complete in ${new Date() - startTime}ms\x1b[22m\x1b[39m`)
}

(function buildEntryFile () {
  buildJSEntry()
  buildScssEntry()
})()
