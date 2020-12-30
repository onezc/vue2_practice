<template>
  <div class="input-wrap">
    <input :value="value" v-bind="$attrs" @input="onInput">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang="less" scoped>
.input-wrap {
  display: inline-block;
}
</style>
