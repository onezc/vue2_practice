import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    doubleNum(state) {
      // console.log(arguments) // zc-print
      return state.num * 2
    }
  },
  mutations: {
    add(state, num = 1) {
      // console.log(this) // zc-print
      state.num += num
    }
  },
  actions: {
    asyncAdd({ commit }, num) {
      console.log(this) // zc-print
      setTimeout(() => {
        commit('add', num)
      }, 1000)
    }
  }
})
