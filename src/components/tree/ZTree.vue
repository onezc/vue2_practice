<template>
  <div>
    <tree-node v-for="data in arr" :key="data.title" :item="data"></tree-node>
  </div>
</template>

<script>
import TreeNode from './TreeNode.vue'
export default {
  components: { TreeNode },
  props: {
    arr: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
