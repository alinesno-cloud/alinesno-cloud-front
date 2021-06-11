import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Layout from 'alinesno-ui/packages/Layout/layout'
import Login from 'alinesno-ui/packages/Login/Login'

// >>>>>>>>>>> TODO 提取出公共路由 >>>>>>>>>>>>>>>>
export const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/dashboard/home'], resolve),
        name: '首页'
      },
      {
        path: '/dashboard/document',
        component: (resolve) => require(['alinesno-ui/src/views/dashboard/document'], resolve),
        name: '文档服务',
        hidden: true
      },
      {
        path: '/dashboard/notifications',
        component: (resolve) => require(['alinesno-ui/src/views/dashboard/notifications'], resolve),
        name: '消息管理',
        hidden: true
      },
      {
        path: '/dashboard/workorder',
        component: (resolve) => require(['alinesno-ui/src/views/dashboard/workorder'], resolve),
        name: '工单管理',
        hidden: true
      },
      {
        path: '/dashboard/platform/service',
        component: (resolve) => require(['alinesno-ui/src/views/dashboard/support'], resolve),
        name: '支持管理',
        hidden: true
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
