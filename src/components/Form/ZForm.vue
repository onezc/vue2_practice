<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(()=> cb(false)) 
    }
  }
}
</script>

<style lang="less" scoped>

</style>
