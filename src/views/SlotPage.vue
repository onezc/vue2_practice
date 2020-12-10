<template>
  <div>
    <h3>插槽</h3>
    <Layout>
      <!-- 具名插槽 -->
      <!-- <template v-slot:header>头部</template> -->
      <!-- or 2.6新增 #代替v-slot：-->
      <template #header>头部</template>
      <!-- 匿名插槽 -->
      <!-- <template>内容部分。。。</template> -->
      <!-- or -->
      <!-- <template v-slot:default>内容部分...</template> -->
      <!-- 匿名作用域插槽 -->
      <!-- <template v-slot:default="{week}">{{week}}</template> -->
      <!-- or -->
      <template slot-scope="{week}">{{week}}</template>
      <!-- 具名作用域插槽 -->
      <template v-slot:footer="{week}">{{week}}</template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/slots/Layout'
export default {
  components: {
    Layout
  }
}
</script>

<style lang="less" scoped>

</style>
