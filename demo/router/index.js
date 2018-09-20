import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Dialog from '../pages/dialog'
import Button from '../pages/button'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello Vue Item',
    component: Home
  }, {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog
  }, {
    path: '/button',
    name: 'Button',
    component: Button
  }]
})
