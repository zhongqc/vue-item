import Vue from 'vue'
import App from './app'
import router from './router'
import VueItem from '../src'

import '../src/theme/index.scss'
import './assets/css/index.scss'

Vue.config.productionTip = false

Vue.use(VueItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
