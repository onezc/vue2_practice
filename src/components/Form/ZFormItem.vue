<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  },
  methods: {
    validate() {
      // 获取对应FormItem检验规则
      const rules = this.form.rules[this.prop]
      // 获取检验值
      const value = this.form.model[this.prop]
      // 检验描述对象
      const descriptor = {
        [this.prop]: rules
      }
      // 创建检验器
      const schema = new Schema(descriptor)
      // 返回Promise
      return schema.validate({
        [this.prop]: value
      }, errors => {
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  }
}
</script>

<style lang="less" scoped>

</style>
