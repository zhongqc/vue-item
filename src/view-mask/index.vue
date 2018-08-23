<template>
  <div class="item-view-mask" @click="$emit('viewMaskClick')" v-show="showFlag"></div>
</template>
<script>
export default {
  name: 'view-mask',
  props: {
    showFlag: {
      type: Boolean,
      default: true
    }
  }
}
</script>
