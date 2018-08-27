<template>
  <popup>
    <div class="item-action-sheet">
      <slot></slot>
    </div>
  </popup>
</template>
<script>
  import Popup from '../popup/index'
  export default {
    name: 'item-action-sheet',
    components: {Popup},
    props: {},
    data () {}
  }
</script>
