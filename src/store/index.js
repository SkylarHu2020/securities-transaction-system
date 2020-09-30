import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    signOut () {
      sessionStorage.removeItem('account')
      sessionStorage.removeItem('token')
      router.replace({
        path: '/',
        query: {
          msg: 'log out successfully!'
        }
      })
    }
  }
})
