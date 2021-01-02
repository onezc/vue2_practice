<template>
  <div>
    <div
      :style="{ paddingLeft: level - 1 + 'em' }"
      @click="toggle">
      <label>{{ item.title }}</label>
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <div v-show="open" v-if="isFolder">
      <tree-node
        v-for="data in item.children"
        :key="data.title"
        :item="data"
        :level="level + 1">
      </tree-node>
    </div>
    <!-- <h3>{{ item.title }}</h3> -->
    <!-- <tree-node v-for="data in item.children" :key="data.title" :item="data"></tree-node> -->
  </div>
</template>

<script>
export default {
  name: 'tree-node',
  props: {
    item: {
      type: Object
    },
    level: {
      type: Number,
      default: 1
    }
  },
  computed: {
    isFolder() {
      return this.item.children && this.item.children.length
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="less" scoped>

</style>
