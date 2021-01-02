import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// vue-router一层view源码hash实现
import router from './zrouter'
import store from './store'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
