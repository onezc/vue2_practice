<template>
  <div>
    <h3>递归组件封装</h3>
    <z-tree :arr='arr'></z-tree>
  </div>
</template>

<script>
import ZTree from '../components/tree/ZTree.vue'
export default {
  components: { ZTree },
  data() {
    return {
      arr: [
        {
          title: '1',
          children: [
            {
              title: '1-1'
            }
          ]
        },
        {
          title: '2',
          children: [
            {
              title: '2-1'
            },
            {
              title: '2-2',
              children: [
                {
                  title: '2-2-1'
                },
                {
                  title: '2-2-2'
                }
              ]
            },
            {
              title: '2-3'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
