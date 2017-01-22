/**
 * @file 滚动节流指令 (v-scroll="handler")
 * @date 2016-11-18
 * @author wangyi27 (zjutiny@gmail.com)
 * @desc 可使用v-scroll.frame采用动画帧节流，默认使用60帧的setTimeout节流
 * @name scrollDirective.js
 */

import Vue from 'vue'
import _ from 'src/util'
export default Vue.directive('scroll', {
  inserted (el, binding) {
    // 默认60帧执行
    const TIME = 1000 / 60
    const cb = binding.value
    const isFrame = binding.modifiers.frame
    if (!_.isFunction(cb)) return
    const callback = isFrame ? _.throttle(cb) : _.throttle(cb, TIME)
    el.addEventListener('scroll', callback)
  },
  componentUpdated () {
    // TODO removeEventListener by state.loadEnd
  }
})
