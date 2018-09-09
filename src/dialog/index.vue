<template>
  <div class="item-dialog">
    <ViewMask @viewMaskClick="$emit('dialogViewMaskClick')" />
    <div class="item-dialog-content">
      <div class="item-dialog-title" v-if="title">{{ title }}</div>
      <div class="item-dialog-slot">
        <slot>
          <div class="item-dialog-message">{{ message }}</div>
        </slot>
      </div>
      <div class="item-dialog-buttons">
        <div class="item-dialog-button" v-for="button in buttons" :key="button.text" :class="button.className" @click="button.click">
          {{ button.text }}
        </div>
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
