/**
 * 将obj响应式处理
 * @param { object } obj 
 * @param { string } key 
 * @param {*} val 
 */
function defineReactive(obj, key, val) {
  // 如果val为对象则递归处理
  observe(val)

  const dep = new Dep()

  Object.defineProperty(obj, key, {
    get() {
      console.log('get:', key ,val) // zc-print
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set:', key, val) // zc-print
        val = newVal
        // 如果newVal为对象则也需要进行响应试处理
        observe(val)
        // 通知更新
        // watchers.forEach(watcher => watcher.update())
        dep.notify()
      }
    }
  })
}
/**
 * 循环遍历obj中每个key并进行响应式处理
 * @param { object } obj 
 */
function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  // Object.keys(obj).forEach(key => {
  //   defineReactive(obj, key, obj[key])
  // })
  // 每有一个对象创建一个Observer实例
  new Observer(obj)
}

// 对不同的对象类型进行不同的响应试处理
class Observer {
  constructor(val) {
    this.value = val
    // val分为数组和对象分别进行不同的操作

    // 先值考虑为对象暂不考虑数组
    this.walk(this.value)
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}
/**
 * 代理
 * @param { object } vm 
 * @param { string } key 
 */
function proxy(vm, key) {
  Object.keys(vm[key]).forEach(k => {
    Object.defineProperty(vm, k, {
      get() {
        return vm[key][k]
      },
      set(newVal) {
        if (vm[key][k] != newVal) {
          vm[key][k] = newVal
        }
      }
    })
  })
}

class ZVue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.$el = options.el
    // 数据响应处理
    observe(this.$data)
    // 将data上的数据代理到ZVue实例上
    proxy(this, '$data')
    // 模板解析
    new Compile(this.$el, this)
  }
}

class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)
    if (this.$el) {
      this.compile(this.$el)
    }
  }
  // 解析宿主元素el所有的内容
  compile(el) {
    el.childNodes.forEach(node => {
      // 如果节点为元素
      if (node.nodeType === 1) {
        // 如果为元素节点继续递归
        this.compile(node)
      } else if (this.isText(node)) {
        console.log(node.textContent, RegExp.$1) // zc-print
        // node.textContent = this.$vm[RegExp.$1]
        this.compileText(node)
      }
    })
  }
  
  // 是否为文本节点
  isText(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileText(node) {
    this.update(node, RegExp.$1, 'text')
  }

  textUpdater(node, val) {
    node.textContent = val
  }

  update(node, exp, dir) {
    const fn = this[dir + 'Updater']
    // 初始化
    fn && fn(node, this.$vm[exp])

    // 更新
    new Watcher(this.$vm, exp, function(val) {
      fn && fn(node, val)
    })
  }
}

// const watchers = []
class Watcher {
  constructor(vm, key, fn) {
    this.vm = vm
    this.key = key
    this.updateFn = fn

    // watchers.push(this)
    Dep.target = this
    this.vm[this.key]
    Dep.target = null
  }

  update() {
    this.updateFn && this.updateFn(this.vm[this.key])
  }
}

class Dep {
  constructor() {
    this.deps = []
  }

  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach(watcher => watcher.update())
  }
}