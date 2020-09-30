import Vue from 'vue'
import Vuex from 'vuex'

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
      this.$router.push({path: '/'})
    }
  }
})
