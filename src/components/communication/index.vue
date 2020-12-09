<template>
  <div ref="parent">
    <Child1 ref="cld" :msg="msg" @some-event="onSomeEvent"/>
    <Child2 :msg="msg" @some-event="onSomeEvent"/>
  </div>
</template>

<script>
import Child1 from './Child1'
import Child2 from './Child2'
export default {
  provide() {
    return {
      foo: 'foo'
    }
  },
  components: {
    Child1,
    Child2
  },
  data() {
    return {
      msg: 'msg from parent'
    }
  },
  methods: {
    onSomeEvent(msg) {
      console.log(this.$refs.cld) // zc-print
      console.log(this.$refs.parent) // zc-print
      console.log('子组件传过来值为：' + msg) // zc-print
    }
  }
}
</script>

<style lang="less" scoped>

</style>
