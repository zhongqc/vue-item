<template>
  <div class="item-dialog">
    <ViewMask @viewMaskClick="$emit('dialogViewMaskClick')" />
    <div class="item-dialog-content">
      <div class="item-dialog-title" v-if="title">{{ title }}</div>
      <div class="item-dialog-slot">
        <slot>{{ message }}</slot>
      </div>
      <div class="item-dialog-button">
        <slot name="button">
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import ViewMask from '../view-mask/index'

export default {
  name: 'item-dialog',
  props: {
    title: {
      type: String | null,
      default: null
    },
    message: {
      type: String | null,
      default: null
    },
    buttons: {
      type: Array | null
    }
  },
  components: {
    ViewMask
  }
}
</script>
