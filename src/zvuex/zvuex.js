let _Vue

class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions
    this._wrapGetters = options.getters

    const computed = {}
    this.getters = {}
    const _store = this
    Object.keys(this._wrapGetters).forEach(key => {
      computed[key] = function() {
        return _store._wrapGetters[key](_store.state)
      }
      Object.defineProperty(_store.getters, key, {
        get: () => {
          console.log(key) // zc-print
          return _store._vm[key]
        }
      })
    })

    // 创建响应式的state
    this._vm = new _Vue({
      data() {
        return {
          $$state: options.state
        }
      },
      computed
    })

    // 指定commit和dispatch函数内部this指向
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(value) {
    console.error('please use right method set!') // zc-print
  }

  commit(type, param) {
    console.log(this) // zc-print
    console.log(type) // zc-print
    const fn = this._mutations[type]
    if (!fn) {
      console.error('no have commit type') // zc-print
      return
    }
    // 指定mutation中方式this指向store实例
    fn.apply(this, [this.state, param])
  }

  dispatch(type, param) {
    console.log(type) // zc-print
    const fn = this._actions[type]
    if (!fn) {
      console.error('no have dispatch type') // zc-print
      return
    }
    // 返回promise
    return fn.apply(this, [this, param])
  }
}

function install(Vue) {
  _Vue = Vue
  _Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default { Store, install }
