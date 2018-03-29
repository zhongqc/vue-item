import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../pages/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Hello Vue Item',
    component: HelloWorld
  }]
})
