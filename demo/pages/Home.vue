<template>
  <div class="hello">
    <head-bar>
      <nav-bar title="Vue Item" leftText="back" :backArrow="false" rightText="right"></nav-bar>
    </head-bar>
    <list>
      <cell></cell>
    </list>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Hello Vue-Item',
        subMsg: 'Hello test'
      }
    }
  }
</script>
