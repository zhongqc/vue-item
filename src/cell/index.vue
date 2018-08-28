<template>
  <div class="item-cell">
    <slot>
      <div class="item-cell-primary">
        <span>{{title}}</span>
      </div>
      <div class="item-cell-sub"></div>
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
      }
    }
  }
</script>
