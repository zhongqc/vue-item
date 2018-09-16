<template>
  <div class="dialog-demo">
    <item-nav-bar title="Dialog" leftText="返回" :backArrow="true" @leftClick="$router.back()" />
    <item-dialog title="提示" :buttons="alertBtn" :show="dialogShow" @dialogViewMaskClick="dialogViewMaskClick">消息</item-dialog>
  </div>
</template>
<script>
export default {
  name: 'dialog-demo',
  data () {
    return {
      alertBtn: [{
        text: '确认',
        className: '',
        click: () => {
          this.dialogShow = false
        }
      }],
      dialogShow: true
    }
  },
  methods: {
    dialogViewMaskClick (e) {
      this.dialogShow = false
    }
  }
}
</script>
