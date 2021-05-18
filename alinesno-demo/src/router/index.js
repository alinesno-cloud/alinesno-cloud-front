import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'

Vue.use(VueRouter)

/* Layout */
import { Layout } from 'common'

const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello
  }
]

export default new VueRouter({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
