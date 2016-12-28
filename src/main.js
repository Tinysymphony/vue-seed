/**
 * @file 应用入口文件
 * @date 2016-11-10
 * @author TinySymphony (zjutiny@gmail.com)
 * @desc 挂载应用，引入router及vuex实例
 * @name main.js
 */

import 'babel-polyfill'
import Vue from 'vue'
import store from '@store/store'
import router from '@router/router'
import Fastclick from 'fastclick'
import StopRubber from '@lib/stopRubber'

// 使用fastclick实现移动端低延迟的click
Fastclick.attach(document.body, { tapDelay: 80 })

// 阻止移动端容器橡皮筋效果
StopRubber({ scroll: '.scroller' })

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
