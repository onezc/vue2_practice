import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from './zvue-router'
// 组件通信
// import CommunicationPage from '../views/CommunicationPage'
// slot使用
// import SlotPage from '../views/SlotPage'
// form 组件封装
// import FormPage from '../views/FormPage'
// 递归组件封装
import TreePage from '../views/TreePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TreePage',
    component: TreePage
  },
  {
    path: '/formPage',
    name: 'FormPage',
    component: () => import(/* webpackChunkName: "FormPage" */ '../views/FormPage.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
