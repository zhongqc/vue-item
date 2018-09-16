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
    round: {
      type: Boolean,
      default () {
        return true
      }
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
    icon: {
      type: String
    },
    iconPosition: {
      type: String
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
