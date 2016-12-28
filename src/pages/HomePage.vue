<!--
 - @file [页面级组件] 首页
 - @date 2016-11-20
 - @author TinySymphony (zjutiny@gmail.com)
 - @desc undefined
 - @name HomePage.vue
 -->

<template>
  <page :page-name="'page_home'">
    <x-header slot="header"></x-header>
    </div>
    <x-footer slot="footer"></x-footer>
  </page>
</template>

<script>
import Page from '@components/Page'
export default {
  beforeCreate () {
    this.$store.dispatch('getActivity')
  },
  components: {
    Page
  }
}
</script>

<style scoped>
</style>
