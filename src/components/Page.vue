<!--
 - @file 页面原型组件
 - @date 2016-11-11
 - @author TinySymphony (zjutiny@gmail.com)
 - @desc 所有需要PV统计的页面组件均需使用，可自动同步并更新购物车
 - @name klPage.vue
 -->

<template lang="html">
  <div id="app-container" class="black3 fs14">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
    <modal></modal>
    <notify></notify>
  </div>
</template>

<script>
import Modal from './Modal'
import Notify from './Notify'
export default {
  props: {
    pageName: {
      type: String,
      required: true
    },
    background: {
      type: String,
      default: '#efefef'
    },
    loadCart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
  },
  created () {
    !!window.Analytics && window.Analytics('send', 'pv', this.pageName)
  },
  components: {
    Modal,
    Notify
  }
}
</script>

<style lang="css">
@import '../common/reset.css';
@import '../common/basic.css';
@import '../common/animation.css';
html, body {
  position: relative;
  height: 100%;
  width: 100%;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  background: #f9f9f9;
}
#kl-app-container {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
