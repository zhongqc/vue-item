<template>
  <div class="item-cell" @click="$emit('cellClick')">
    <slot>
      <div class="item-cell-head">
        <slot name="cell-head">
          <i class="item-icon" :class="icon" v-if="icon"></i>
        </slot>
      </div>
      <div class="item-cell-body">
        <span class="item-cell-title">{{ title }}</span>
        <span class="item-cell-desc">{{ desc }}</span>
      </div>
      <div class="item-cell-foot">
        <span class="item-cell-note">{{ note }}</span>
        <i class="item-icon" :class="rightIcon" v-if="rightIcon"></i>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'item-cell',
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    },
    note: {
      type: String
    },
    icon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    }
  }
}
</script>
