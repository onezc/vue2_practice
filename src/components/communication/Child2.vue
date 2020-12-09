<template>
  <div>
    <h3>child2</h3>
    <!-- $attrs -->
    <p>{{$attrs.msg}}</p>
    <!-- 事件总线 -->
    <button @click="sendToChild1">send to child1</button>
    <!-- 隔代传值 -->
    <Grandson v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Grandson from './Grandson'
export default {
  components: {
    Grandson
  },
  methods: {
    sendToChild1() {
      this.$bus.$emit('event-from-child2', 'msg from child2')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
