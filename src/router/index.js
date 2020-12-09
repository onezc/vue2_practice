import Vue from 'vue'
import VueRouter from 'vue-router'
// 组件通信
import CommunicationPage from '../views/CommunicationPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CommunicationPage',
    component: CommunicationPage
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
