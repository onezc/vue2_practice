<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot :week="getCurWeek"></slot>
    </div>
    <div class="footer">
      <slot name="footer" :week="getCurWeek"></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCurWeek() {
      return '星期' + new Date().getDay()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
