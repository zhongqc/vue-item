import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Dialog from '../pages/dialog'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Hello Vue Item',
    component: Home
  }, {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog
  }]
})
