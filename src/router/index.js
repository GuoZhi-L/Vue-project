import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultLayout',// 布局组件
      component: () => import('../components/layout/Default.vue'),
      // redirect: { name: 'Workbench' },
      children: [
        {
          path: '/work',
          name: 'Work',
          component: () => import('../views/Work.vue')
        },
        {
          path: '/module',
          name: 'Module',
          component: () => import('../views/Module.vue')
        },
        {
          path: '/study',
          name: 'Study',
          component: () => import('../views/Study.vue')
        }
      ]
    },

  ]
})
