/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from '@router/router'
import API from './API'

const TIME_OUT = 5000

Vue.use(VueResource)

Vue.http.interceptors.push((req, next) => {
  req.timeout = TIME_OUT
  next()
})

export default {
  getActivity (context, payload) {
    return Vue.http({
      method: 'get',
      url: API.EXAMPLE
    })
      .then(res => res.json())
      .then(res => {
        context.commit('SET_EXAMPLE', res.data)
      })
      .catch(e => { console.error(e) })
  }
}
