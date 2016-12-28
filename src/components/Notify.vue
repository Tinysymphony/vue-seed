<!--
 - @file 提示框组件
 - @date 2016-11-24
 - @author TinySymphony (zjutiny@gmail.com)
 - @desc 全局弹出提示框，依赖store上的notify对象
 - @name klNotify.vue
 -->

<template lang="html">
  <div class="kl-notify fs14" v-if="isShow">{{notify.msg}}</div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    notify () {
      return this.$store.state.notify
    }
  },
  watch: {
    'notify' (newVal, oldVal) {
      if (newVal.isValide) {
        this.showNotify()
        this.$store.commit('FINISH_NOTIFY')
      }
    }
  },
  methods: {
    showNotify () {
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 1000)
    }
  }
}
</script>

<style lang="css">
.kl-notify {
  position: fixed;
  bottom: 50%;
  bottom: calc(50vh - 50px);
  left: 50%;
  margin-left: -90px;
  width: 180px;
  border-radius: 10px;
  line-height: 2em;
  padding: 5px;
  background: rgba(0, 0, 0, .8);
  color: #fff;
  animation: pulse .2s ease;
  text-align: center;
  z-index: 10000;
}
</style>
