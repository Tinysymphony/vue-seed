/**
 * @file js工具文件
 * @date 2016-11-12
 * @author TinySymphony (zjutiny@gmail.com)
 * @desc 自定义工具函数定义
 * @name util.js
 */

/* eslint-disable no-unused-vars */

let isType = {}
const TYPE_LIST = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet']
TYPE_LIST.forEach((name) => {
  isType['is' + name] = obj => toString.call(obj) === '[object ' + name + ']'
})

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
function isArrayLike (val) {
  let length = val == null ? void 0 : val['length']
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}

function _isObject (obj) {
  let type = typeof obj
  return type === 'function' || type === 'object' && !!obj
}

function _values (obj) {
  let result = []
  if (!_isObject(obj)) return result
  let keys = Object.keys(obj)
  for (let i = 0, len = keys.length; i < len; i++) {
    result.push(obj[keys[i]])
  }
  return result
}

function _throttle (fn, time) {
  let running = false
  let isFrame = false
  if (!time) isFrame = true
  const getCallback = (self, args) => {
    return () => {
      fn.apply(self, args)
      running = false
    }
  }
  return function () {
    if (running) return
    running = true
    if (isFrame) {
      window.requestAnimationFrame(getCallback(this, arguments))
    } else {
      setTimeout(getCallback(this, arguments), time)
    }
  }
}

function _parents (el, selector) {
  var result = []
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector
  el = el.parentElement
  while (el) {
    if (matchesSelector.call(el, selector)) result.push(el)
    el = el.parentElement
  }
  return result
}

export default {
  values: _values,
  throttle: _throttle,
  parents: _parents,
  ...isType
}
