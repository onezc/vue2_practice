import Vue from 'vue'

function create(Component, props) {
  // 创建Vue实例
  const vm = new Vue({
    render(h) {
      // render函数将传入组件配置对象转换为虚拟dom，需要挂载后才会产生真实dom
      console.log(h(Component, { props })) // zc-print
      return h(Component, { props })
    }
  }).$mount() // 不指定宿主元素，则会创建真实dom，但不会有追加操作
  document.body.appendChild(vm.$el)
  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default create
