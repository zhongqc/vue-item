<template>
  <transition :name="transitionName">
    <div class="item-popup" @click="popupClick"></div>
  </transition>
</template>
<script>
  export default {
    name: 'popup',
    props: {
      transitionName: {
        type: String,
        default () {
          return 'popupTransition'
        }
      }
    }
  }
</script>
