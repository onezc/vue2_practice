<template>
  <div>
    <h3>form组件封装</h3>
    <z-form :model="model" :rules="rules" ref="form">
      <z-form-item label="姓名：" prop="name">
        <z-input
          type="text"
          class="input"
          v-model="model.name"
        />
      </z-form-item>
      <z-form-item label="密码：" prop="password">
        <z-input
          type="password"
          class="input"
          v-model="model.password"
        />
      </z-form-item>
      <z-form-item>
        <button @click.prevent="onLogin">登录</button>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
import ZForm from '../components/Form/ZForm.vue'
import ZFormItem from '../components/Form/ZFormItem.vue'
import ZInput from '../components/Form/ZInput.vue'
import create from '../components/message/create'
import create1 from '../components/message/create1'
import Message from '../components/message'
export default {
  components: {
    ZInput,
    ZFormItem,
    ZForm
  },
  data() {
    return {
      model: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ]
      }
    }
  },
  methods: {
    onLogin() {
      console.log(this.$refs.form) // zc-print
      console.log(this.model) // zc-print
      const $msg = create(Message, {
        title: '登录成功',
        msg: '恭喜恭喜',
        duration: 2000
      })
      const $msg1 = create1(Message, {
        title: '登录失败',
        msg: '可惜可惜',
        duration: 2000
      })
      this.$refs.form.validate(valid => {
        console.log(valid) // zc-print
        valid
          ? $msg.show()
          : $msg1.show()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.input {
  border: 1px solid red;
}
</style>
