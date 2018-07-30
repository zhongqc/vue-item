import ActionSheet from './action-sheet/index'
import List from './list/index'
import Cell from './cell/index'
import NavBar from './nav-bar/index'
import HeadBar from './head-bar/index'
import FootBar from './foot-bar/index'

const Components = [ActionSheet, List, Cell, NavBar, HeadBar, FootBar]

const VueItem = {
  install (Vue, options = {}) {
    Components.map(component => {
      Vue.component(component.name, component)
    })
  },
  version: '0.1.0',
  ...Components
}

if (window && window.Vue) {
  window.Vue.use(VueItem)
}

export default VueItem
