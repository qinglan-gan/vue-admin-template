import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },


  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '车辆管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '车位信息', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '车辆信息', icon: 'tree' }
      }
    ]
  },


  {
    path: '/business',
    component: Layout,
    redirect: '/example/man',
    name: 'Business',
    meta: { title: '商家管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'man',
        name: 'Man',
        component: () => import('@/views/form/index'),
        meta: { title: '商家管理', icon: 'table' }
      },
      {
        path: 'item',
        name: 'Item',
        component: () => import('@/views/item/index'),
        meta: { title: '项目管理', icon: 'tree' }
      }
    ]
  },



  // {
  //   path: '/user',
  //   component: Layout,
  //   redirect: '/example/commonuser',
  //   name: 'User',
  //   meta: { title: '人员管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'commonuser',
  //       name: 'Commonuser',
  //       component: () => import('@/views/user/commonuser'),
  //       meta: { title: '业主管理', icon: 'table' }
  //     },
  //     {
  //       path: 'manager',
  //       name: 'Manager',
  //       component: () => import('@/views/user/manager'),
  //       meta: { title: '管理员信息', icon: 'tree' }
  //     }
  //   ]
  // },



  {
    path: '/resource',
    component: Layout,
    redirect: '/example/assert',
    name: 'Resource',
    meta: { title: '资源管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'assert',
        name: 'Assert',
        component: () => import('@/views/assert/index'),
        meta: { title: '动产管理', icon: 'table' }
      },
      {
        path: 'build',
        name: 'Build',
        component: () => import('@/views/build/index'),
        meta: { title: '楼栋管理', icon: 'tree' }
      },
      {
        path: 'house',
        name: 'House',
        component: () => import('@/views/house/index'),
        meta: { title: '房屋管理', icon: 'tree' }
      }
    ]
  },




  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/complaint/index'),
        meta: { title: '投诉模块', icon: 'form' }
      }
    ]
  },
  {
    path: '/notice',
    component: Layout,
    children: [
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/notice/index'),
        meta: { title: '通知模块', icon: 'form' }
      }
    ]
  },

  {
    path: '/commonuser',
    component: Layout,
    children: [
      {
        path: 'commonuser',
        name: 'commonuser',
        component: () => import('@/views/user/commonuser'),
        meta: { title: '业主管理', icon: 'form' }
      }
    ]
  },
  {
    path: '/fix',
    component: Layout,
    children: [
      {
        path: 'fix',
        name: 'fix',
        component: () => import('@/views/fix/index'),
        meta: { title: '报修管理', icon: 'form' }
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
