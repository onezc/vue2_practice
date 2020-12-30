import Vue from 'vue'
import VueRouter from 'vue-router'
// 组件通信
// import CommunicationPage from '../views/CommunicationPage'
// slot使用
// import SlotPage from '../views/SlotPage'
// form 组件封装
import FormPage from '../views/FormPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FormPage',
    component: FormPage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
