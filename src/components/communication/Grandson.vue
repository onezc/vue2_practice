<template>
  <div @click="$emit('some-event', 'msg from grandson')">
    <h3>Grandson</h3>
    <p>{{msg}}</p>
    <p>{{foo1}}</p>
  </div>
</template>

<script>
export default {
  inject: {
    foo1: {
      from: 'foo'
    }
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
