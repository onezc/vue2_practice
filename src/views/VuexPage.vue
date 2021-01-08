<template>
  <div>
    <h3>vuex 使用</h3>
    <P>num：{{ $store.state.num }}</P>
    <P>doubleNum：{{ $store.getters.doubleNum }}</P>
    <button @click="$store.commit('add')">同步 +1</button>
    <button @click="$store.dispatch('asyncAdd')">异步 +1</button>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$store) // zc-print
  }
}
</script>

<style lang="less" scoped>

</style>
