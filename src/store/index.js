import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posiData: [],
    orderData: [],
    tradeData: [],
    balance: 0
  },
  mutations: {
    updatePosi(state, posiInfo) {
      state.posiData = posiInfo;
    },
    updateOrder(state, posiOrder) {
      state.posiOrder = posiOrder;
    },
    updateTrade(state, posiTrade) {
      state.posiTrade = posiTrade;
    },
    updateBalance(state, balance) {
      state.balance = balance;
    },
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
    },
  }
})
