<template>
  <div class="button-demo">
    <item-nav-bar title="Button" leftText="返回" :backArrow="true" @leftClick="$router.back()" />
    <item-button>info</item-button>
    <item-button fluid>info</item-button>
    <item-button :round="false">info</item-button>
  </div>
</template>
<script>
export default {
  name: 'button-demo'
}
</script>
