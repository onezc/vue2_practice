// 实现一个vue插件，必须返回一个函数会返回一个有install方法的对象
let _Vue

class VueRouter {
  constructor(options) {
    this.$options = options
    console.log(options) // zc-print
    // 保存path和route映射
    this.routeMap = {}
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
    // 定义一个响应式的current属性, 默认值为当前hash值
    _Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')
    // 监听hash变化
    window.addEventListener('hashchange', this.onHashChange.bind(this))
  }

  onHashChange() {
    this.current = window.location.hash.slice(1)
    console.log(this.current) // zc-print
  }
}

VueRouter.install = function(Vue) {
  _Vue = Vue
  _Vue.mixin({
    beforeCreate() {
      console.log(this) // zc-print
      // 判断是否为new Vue()配置选项是否有router
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 注册全局组件router-link
  _Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      return h('a', {
        attrs: {
          href: '#' + this.to
        }
      }, this.$slots.default)
    }
  })

  // 注册全局组件router-view
  _Vue.component('router-view', {
    render(h) {
      console.log(this.$router) // zc-print
      const { routeMap, current } = this.$router
      const comp = routeMap[current] ? routeMap[current].component : null
      return h(comp)
    }
  })
}

export default VueRouter
