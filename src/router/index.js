import Home from '@/components/Home'
import Exam from '@/pages/exam'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      // {
      //   path: '/exam',
      //   // name: 'home',
      //   component: Exam
      // },
      // {
      //   path: '/chart',
      //   component: () => import('@/views/chart')
      // },
      // {
      //   path: '/cesium',
      //   component: () => import('@/views/404')
      // }
    ]
  },
  {
    path: '/exam',
    // name: 'home',
    component: Exam
  }
]

const router = new VueRouter({
  routes
})


export default router
