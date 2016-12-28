/**
 * @file router实例定义
 * @date 2016-11-12
 * @author TinySymphony (zjutiny@gmail.com)
 * @desc 引入路由表
 * @name router.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  saveScrollPosition: true,
  // TODO
  scrollBehavior (to, from, savedPosition) {
  }
})

export default router
