import Vue from 'vue'

function create1(Component, props) {
  // 生成Component构造函数
  const Cptor = Vue.extend(Component)
  // 生成实例
  const cpt = new Cptor({ propsData: props })
  // 生成真实真实dom $el
  cpt.$mount()
  // 将$el抛到body下面
  document.body.appendChild(cpt.$el)
  cpt.remove = () => {
    document.body.removeChild(cpt.$el)
    cpt.$destroy()
  }
  return cpt
}

export default create1
