/**
 * @file 图片懒加载指令 (v-lazy="url")
 * @date 2016-11-12
 * @author wangyi27 (zjutiny@gmail.com)
 * @desc 使用节流的滚动回调函数，加载完毕后会自动解除监听
 * @name lazyDirective.js
 */

import Vue from 'vue'
import _ from 'src/util'

let elementList = []
let isBindScroll = false
let defaultUrl = ''
let scrollEle = null
const LOAD_FAIL = 'failed'
const LOAD_SUCCESS = 'loaded'
const lazyLoadHandler = _.throttle(lazyLoadImage)

// check whether passive option is supported
let option = false
window.addEventListener('test', () => {}, {
  get passive () {
    option = {passive: true}
  }
})

function isImageInView (el) {
  const rect = el.getBoundingClientRect()
  const threshold = 100
  return rect.top >= 0 && rect.top - threshold <= window.screen.height
}

function lazyLoadImage () {
  const len = elementList.length
  if (!len) return unbindScroll()
  // 倒序遍历
  for (let i = len - 1; i >= 0; i--) {
    let item = elementList[i]
    const {el, url} = item
    if (!isImageInView(el)) continue
    el.src = url
    el.onerror = () => {
      el.src = defaultUrl
      el.dataset.status = LOAD_FAIL
    }
    el.onload = () => {
      el.dataset.status = LOAD_SUCCESS
    }
    // 从加载判断列表中删除
    elementList.splice(i, 1)
  }
}

function bindScroll () {
  const el = document.querySelector(scrollEle) || window
  el.addEventListener('scroll', lazyLoadHandler, option)
  lazyLoadHandler()
  isBindScroll = true
}

function unbindScroll () {
  const el = document.querySelector(scrollEle) || window
  el.removeEventListener('scroll', lazyLoadHandler, option)
  isBindScroll = false
  elementList = []
}

export default ({parentEle, defaultImg}) => {
  defaultUrl = defaultImg
  scrollEle = parentEle
  return Vue.directive('lazy', {
    inserted: (el, binding) => {
      elementList.push({
        el: el,
        url: binding.value
      })
      // throttle 函数使用 requestAnimationFrame 初次执行会在所有 element 进入列表之后
      if (!isBindScroll) bindScroll()
    },
    unbind () {
      if (isBindScroll) unbindScroll()
    }
  })
}
