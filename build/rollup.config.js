const version = require('../package.json').version

const banner =
`/*!
  * VueItem v${version}
  * (c) 2018-${new Date().getFullYear()} Zhongqc
  * Released under the MIT License.
  */`

export default {
  input: 'esModule/index.js',
  output: {
    file: 'lib/vue-item.js',
    format: 'umd',
    name: 'VueItem',
    sourcemap: true,
    banner
  }
}
