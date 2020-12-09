<template>
  <div @click="$emit('some-event', 'msg from child1')">
    <h3>child1</h3>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$bus.$on('event-from-child2', msg => {
      console.log(msg) // zc-print
    })
  }
}
</script>

<style lang="less" scoped>

</style>
