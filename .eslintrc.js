module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0
  }
}
