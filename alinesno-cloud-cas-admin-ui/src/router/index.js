import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Layout , Login } from 'alinesno-ui'

// >>>>>>>>>>> TODO 提取出公共路由 >>>>>>>>>>>>>>>>
export const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: '首页',
        meta: { title: '首页', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/login',
    component: Login ,
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['alinesno-ui/src/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['alinesno-ui/src/views/error/401'], resolve),
    hidden: true
  }
]

export default new VueRouter({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
