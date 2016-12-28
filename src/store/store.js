import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  actions,
  state,
  getters,
  mutations
})

export default store
