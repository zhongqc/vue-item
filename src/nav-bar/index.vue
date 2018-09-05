<template>
  <div class="item-nav-bar">
    <div class="left" @click="$emit('leftClick')">
      <slot name="left">
        <i class="item-icon arrow-left" v-if="backArrow"></i>
        {{ leftText }}
      </slot>
    </div>
    <div class="title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="right" @click="$emit('rightClick')">
      <slot name="right">
        {{ rightText }}
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'item-nav-bar',
    props: {
      title: {
        type: String
      },
      leftText: {
        type: String
      },
      rightText: {
        type: String
      },
      backArrow: {
        type: Boolean
      }
    }
  }
</script>
