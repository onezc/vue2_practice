<template>
  <div class="msg-wrap" v-show="isShow">
    <div class="msg-content">
      <h3>{{ title }}</h3>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
      setTimeout(this.hide, this.duration)
    },
    hide() {
      this.isShow = false
      this.remove()
    }
  }
}
</script>

<style lang="less" scoped>
.msg-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  .msg-content {
    width: 300px;
    border: 1px solid orchid;
  }
}
</style>
