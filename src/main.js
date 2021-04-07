// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false


import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import VueMatomo from 'vue-matomo'
Vue.use(VueMatomo, {
  host: `你自己的matomo地址`,
  siteId: '这个值页需要去matomo上去申请', // siteId值
  // 根据router自动注册,需要注意的是如果有路由传值值太长的话会matomo会监听不到并报414，就不能使用此方法了
   router: router,
  // 是否需要在发送追踪信息之前请求许可
  // 默认false
  requireConsent: false,
  enableLinkTracking: true,
  // 是否追踪初始页面
  // 默认true
  trackInitialView: false,
  // 最终的追踪js文件名，因为我这边的matomo版本比较老，所以使用的是piwik，现在版本新的话此值应该为matomo
  trackerFileName: 'piwik',
  debug: true,
  userId:'当前用户登录Id,可根据需求来设置，非必传，也可以在用户登录成功之后设置'
})

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
