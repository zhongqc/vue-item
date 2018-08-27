<template>
  <div class="item-cell-group">
    <div class="item-cell-group-title">{{ groupTitle }}</div>
    <slot />
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
