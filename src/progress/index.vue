<template>
  <div class="item-progress"></div>
</template>
<script>
export default {
  name: 'item-progress',
  props: {
    percentage: {
      type: Number,
      required: true,
      validator (value) {
        return value >= 0 && value <= 100
      }
    },
    strokeWidth: {
      type: Number,
      default () {
        return 6
      }
    },
    showPercentage: {
      type: Boolean,
      default () {
        return true
      }
    },
    type: {
      type: String,
      default () {
        return 'line'
      },
      validator (value) {
        return ['line', 'circle'].indexOf(value) !== -1
      }
    },
    colorRange: {
      type: Array,
      default () {
        return ['#d95c5c', '#e6bb48', '#21ba45']
      },
      validator (value) {
        return value.length > 2 && value.length < 6
      }
    }
  }
}
</script>
