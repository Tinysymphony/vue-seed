<!--
 - @file 加载动画组件 [gif动画]
 - @date 2016-12-07
 - @author TinySymphony (zjutiny@gmail.com)
 - @desc undefined
 - @name ballFadeSpin.vue
 -->

<template lang="html">
  <div class="loading-wp">
    <img :src="img" class="loading-gif">
  </div>
</template>

<script>
import img from '@assets/img/loading.gif'
export default {
  data () {
    return { img }
  }
}
</script>

<style lang="css">
.loading-wp {
  width: 100%;
}
.loading-gif {
  width: 40px;
}
</style>
