import ActionSheet from './ActionSheet/ActionSheet.vue'

const Components = [ActionSheet]

const VueItem = {
  install (Vue, options = {}) {
    Components.map(component => {
      Vue.component(component.name, component)
    })
  },
  version: '0.1.0'
}

export default VueItem
