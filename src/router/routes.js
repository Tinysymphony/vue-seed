/**
 * @file 路由表定义
 * @date 2016-11-12
 * @author TinySymphony (zjutiny@gmail.com)
 * @desc 引入其他页面级组件，可选择页面js懒加载（切换下方注释）
 * @name routes.js
 */

/* eslint-disable no-unused-vars */
import HomePage from '@pages/HomePage'
// const HomePage = resolve => require(['@pages/HomePage'], resolve)

export default [{
  path: '/',
  component: HomePage
}]
