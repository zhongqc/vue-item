<template>
  <div class="item-cell-group">
    <div class="item-cell-group-title" v-if="groupTitle">{{ groupTitle }}</div>
      <div class="item-cell-group-list">
        <slot />
      </div>
  </div>
</template>
<script>
export default {
  name: 'item-cell-group',
  props: {
    groupTitle: {
      type: String
    }
  }
}
</script>
