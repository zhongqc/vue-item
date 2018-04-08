<template>
  <div>
    {{ msg }}
    <br>
    {{ subMsg }}
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

<style scoped>

</style>
