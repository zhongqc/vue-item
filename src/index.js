import ActionSheet from './action-sheet/index'
import Cell from './cell/index'
import Dialog from './dialog/index'
import FootBar from './foot-bar/index'
import Gallery from './gallery/index'
import HeadBar from './head-bar/index'
import List from './list/index'
import Loading from './loading/index'
import NavBar from './nav-bar/index'
import Picker from './picker/index'
import Popup from './popup/index'
import Progress from './progress/index'
import Toast from './toast/index'
import ViewMask from './view-mask/index'

const Components = [
  ActionSheet,
  Cell,
  Dialog,
  FootBar,
  Gallery,
  HeadBar,
  List,
  Loading,
  NavBar,
  Picker,
  Popup,
  Progress,
  Toast,
  ViewMask
]

const VueItem = {
  install (Vue, options = {}) {
    Components.map(component => {
      Vue.component(component.name, component)
    })
  },
  version: '0.1.0',
  ActionSheet,
  Cell,
  Dialog,
  FootBar,
  Gallery,
  HeadBar,
  List,
  Loading,
  NavBar,
  Picker,
  Popup,
  Progress,
  Toast,
  ViewMask
}

if (window && window.Vue) {
  window.Vue.use(VueItem)
}

export default VueItem
