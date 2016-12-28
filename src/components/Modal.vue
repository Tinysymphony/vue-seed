<!--
 - @file 登录提示Modal组件
 - @date 2016-11-15
 - @author TinySymphony (zjutiny@gmail.com)
 - @desc 全局弹出提示框，依赖store上的notify对象
 - @name klModal.vue
 -->

<template lang="html">
  <div class="fix carpet" v-if="modal.isShow" @click.self="dismiss">
    <div class="login-modal modal" v-if="modal.type===1">
      <h3 class="modal-info black3">您尚未登录</h3>
      <a href="javascript:;" class="later-btn fs14 black7" @click="dismiss">稍后再说</a>
      <a href="javascript:;" class="login-btn fs14 main-red" @click="toLoginPage">去登陆</a>
    </div>
  </div>
</template>

<script>
import router from '@router/router'
export default {
  computed: {
    modal () {
      return this.$store.state.modal
    }
  },
  methods: {
    dismiss () {
      this.$store.commit('HIDE_MODAL')
    },
    toLoginPage () {
      router.push('/login')
    }
  }
}
</script>

<style lang="css" scoped>
.carpet {
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}
.modal {
  animation: popup .2s ease;
}
.login-modal {
  position: absolute;
  top: 30%;
  top: calc(50vh - 50px);
  left: 50%;
  margin-left: -90px;
  height: 100px;
  width: 180px;
  text-align: center;
  background: #eee;
  border-radius: 5px;
}
.modal-info {
  line-height: 60px;
  border-bottom: 1px solid #D8D8D8;
}
.later-btn, .login-btn {
  position: absolute;
  bottom: 0;
  width: 50%;
  line-height: 20px;
  padding: 10px 0;
}
.later-btn {
  left: 0;
  border-right: 1px solid #D8D8D8;
}
</style>
