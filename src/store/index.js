import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0,
    posiData: [],
    orderData: [],
    tradeData: [],
    hisOrderData: [],
    hisTradeData: []
  },
  mutations: {
    updatePosi(state, posiInfo) {
      state.posiData = posiInfo
    },
    updateOrder(state, orderInfo) {
      state.orderData = orderInfo
    },
    updateTrade(state, tradeInfo) {
      state.tradeData = tradeInfo
    },
    updateBalance(state, balance) {
      state.balance = balance
    },
    updateHisOrder(state, hisOrderInfo) {
      state.hisOrderData = hisOrderInfo
    },
    updateHisTrade(state, hisTradeInfo) {
      state.hisTradeData = hisTradeInfo
    }
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
