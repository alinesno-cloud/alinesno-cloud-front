import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { BaseLayout , Login } from 'alinesno-ui'

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
    path: '/build/things',
    component: BaseLayout,
    children: [
      {
        path: '/build/things/index',
        component: (resolve) => require(['@/views/dashboard/things/index'], resolve),
        name: '创建物联网应用',
        meta: { title: '创建物联网应用', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/build/datawork',
    component: BaseLayout,
    children: [
      {
        path: '/build/datawork/index',
        component: (resolve) => require(['@/views/dashboard/datawork/index'], resolve),
        name: '创建大数据应用',
        meta: { title: '创建大数据应用', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/build/app',
    component: BaseLayout,
    children: [
      {
        path: '/build/app/index',
        component: (resolve) => require(['@/views/dashboard/app/index'], resolve),
        name: '创建移动应用',
        meta: { title: '创建移动应用', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/app/gitlab',
        component: (resolve) => require(['@/views/dashboard/app/gitlab'], resolve),
        name: '连接仓库'
      },
      {
        path: '/build/app/model',
        component: (resolve) => require(['@/views/dashboard/app/model'], resolve),
        name: '模型管理'
      },
      {
        path: '/build/app/overview',
        component: (resolve) => require(['@/views/dashboard/app/overview'], resolve),
        name: '组件空间',
        meta: { title: '组件空间', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/app/config',
        component: (resolve) => require(['@/views/dashboard/app/config'], resolve),
        name: '配置管理'
      },
      {
        path: '/build/app/deploy',
        component: (resolve) => require(['@/views/dashboard/app/deploy'], resolve),
        name: '应用发布'
      }
    ]
  },
  {
    path: '/build',
    component: BaseLayout,
    children: [
      {
        path: '/build/component',
        component: (resolve) => require(['@/views/dashboard/buildComponent'], resolve),
        name: '创建应用',
        meta: { title: '创建应用', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/connectGit',
        component: (resolve) => require(['@/views/dashboard/connectGit'], resolve),
        name: '连接gitlab账号',
        meta: { title: '连接gitlab账号', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/overview',
        component: (resolve) => require(['@/views/dashboard/overview'], resolve),
        name: '组件空间',
        meta: { title: '组件空间', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/information',
        component: (resolve) => require(['@/views/dashboard/information'], resolve),
        name: '项目信息',
        meta: { title: '项目信息', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/deploy',
        component: (resolve) => require(['@/views/dashboard/deploy'], resolve),
        name: '发布构建',
        meta: { title: '容器配置', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/gitlab',
        component: (resolve) => require(['@/views/dashboard/gitlab'], resolve),
        name: '仓库配置',
        meta: { title: '容器配置', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      },
      {
        path: '/build/container',
        component: (resolve) => require(['@/views/dashboard/container'], resolve),
        name: '容器配置',
        meta: { title: '容器配置', icon: 'fas fa-chalkboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '',
    component: BaseLayout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/dashboard/home'], resolve),
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
