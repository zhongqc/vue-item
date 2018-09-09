<template>
  <div class="hello">
    <item-nav-bar title="Vue Item" leftText="back" :backArrow="true" rightText="right"></item-nav-bar>
    <item-cell-group v-for="list of ComponentList" :key="list.title" :groupTitle="list.title">
      <item-cell v-for="component of list.list" :key="component.title" :title="component.title" @cellClick="$router.push(component.link)" rightIcon="arrow-right" desc="test">
      </item-cell>
    </item-cell-group>
  </div>
</template>
<script>
import ComponentList from '../assets/json/component-list'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello Vue-Item',
      subMsg: 'Hello test',
      ComponentList
    }
  },
  methods: {}
}
</script>
