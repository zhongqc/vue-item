<template>
  <button class="item-button" :class="buttonClass">
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
<script>
export default {
  name: 'item-button',
  props: {
    text: {
      type: String
    },
    fluid: {
      type: Boolean,
      default () {
        return false
      }
    },
    type: {
      type: String
    },
    leftIcon: {
      type: String
    },
    rightIcon: {
      type: String
    },
    loading: {
      type: Boolean,
      default () {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    nativeType: {
      type: String,
      default () {
        return 'button'
      }
    },
    size: {
      type: String,
      default () {
        return 'M'
      }
    }
  },
  computed: {
    buttonClass () {
      return {
        'item-button-fluid': this.fluid,
        'item-button-round': this.round
      }
    }
  }
}
</script>
