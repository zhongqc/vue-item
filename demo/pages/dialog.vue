<template>
  <item-dialog title="提示" :buttons="alertBtn">消息</item-dialog>
</template>
<script>
export default {
  name: 'dialog-demo',
  data () {
    return {
      alertBtn: [{
        text: '确认',
        className: '',
        click: () => { console.log(1) }
      }]
    }
  }
}
</script>
