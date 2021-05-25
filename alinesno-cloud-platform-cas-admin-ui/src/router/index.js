import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Layout , Login } from 'alinesno-ui'

// >>>>>>>>>>> TODO 提取出公共路由 >>>>>>>>>>>>>>>>
export const constantRoutes = [
  {
    path: '/hello',
    component: (resolve) => require(['@/views/portal/ucenter/project/list'], resolve),
    hidden: true
  },
  {
    path: '/portal',
    component: (resolve) => require(['@/views/portal/index'], resolve),
    hidden: true
  },
  {
    path: '/solution',
    component: (resolve) => require(['@/views/solution/index'], resolve),
    hidden: true
  },
  {
    path: '/support',
    component: (resolve) => require(['@/views/support/index'], resolve),
    hidden: true
  },
  {
    path: '/developer',
    component: (resolve) => require(['@/views/developer/index'], resolve),
    hidden: true
  },
  {
    path: '/technique',
    component: (resolve) => require(['@/views/technique/index'], resolve),
    hidden: true
  },
  {
    path: '/starter',
    component: (resolve) => require(['@/views/starter/index'], resolve),
    hidden: true
  },
  {
    path: '/document',
    component: (resolve) => require(['@/views/document/index'], resolve),
    hidden: true
  },
  {
    path: '/about',
    component: (resolve) => require(['@/views/about/index'], resolve),
    hidden: true
  },
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
