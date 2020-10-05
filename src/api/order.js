import axios from 'axios'
import config from '../../config.js'

import store from '../store'

const balance = 23940

const posiList = [
  {code: '000001', name: 'stock name1', volumn: 10, cost: 40, price: 4},
  {code: '000002', name: 'stock name2', volumn: 20, cost: 24, price: 1.2},
  {code: '000003', name: 'stock name3', volumn: 30, cost: 20, price: 0.63},
  {code: '000004', name: 'stock name4', volumn: 40, cost: 20, price: 0.555},
]

const orderList = [
  {time: '09:40:00', code: '000001', name: 'stock name1', price: 100, count: 10, direction: 'buy', status: 3},
  {time: '10:30:00', code: '000002', name: 'stock name2', price: 35, count: 5, direction: 'sell', status: 1},
  {time: '22:10:00', code: '000003', name: 'stock name3', price: 70, count: 100, direction: 'buy', status: 2},
]

const tradeList = [
  {time: '09:40:00', code: '000001', name: 'stock name1', price: 100, volumn: 10, amounts: 130, direction: 'buy'},
  {time: '10:30:00', code: '000002', name: 'stock name2', price: 35, volumn: 5, amounts: 150, direction: 'sell'},
  {time: '22:10:00', code: '000003', name: 'stock name3', price: 45, volumn: 88, amounts: 33, direction: 'buy'},
]

const hisOrderList = [
  {date: '20200105', time: '09:40:00', code: '000001', name: 'stock name1', price: 100, count: 10, direction: 'buy', status: 3},
  {date: '20200101', time: '10:30:00', code: '000002', name: 'stock name2', price: 35, count: 5, direction: 'sell', status: 1},
  {date: '20200203', time: '22:10:00', code: '000003', name: 'stock name3', price: 70, count: 100, direction: 'buy', status: 2},
  {date: '20200115', time: '23:08:00', code: '000004', name: 'stock name4', price: 56, count: 43, direction: 'sell', status: 2},
]

const hisTradeList = [
  {date: '20200403', time: '09:40:00', code: '000001', name: 'stock name1', price: 100, volumn: 10, amounts: 130, direction: 'buy'},
  {date: '20200214', time: '10:30:00', code: '000002', name: 'stock name2', price: 35, volumn: 5, amounts: 150, direction: 'sell'},
  {date: '20200513', time: '22:10:00', code: '000003', name: 'stock name3', price: 70, volumn: 100, amounts: 200, direction: 'buy'},
  {date: '20200808', time: '17:10:00', code: '000004', name: 'stock name4', price: 40, volumn: 60, amounts: 300, direction: 'sell'},
]

export default {
  queryBalance () {
    // const url = config.domain + '/api/balance'
    // const res = await axios.post(url)
    const res = balance
    store.commit("updateBalance", res)
  },

  queryPosi () {
    // const url = config.domain + '/api/posiinfo'
    // const res = await axios.post(url)
    const res = posiList
    store.commit("updatePosi", res)
  },

  queryOrder () {
    // const url = config.domain + '/api/orderinfo'
    // const res = await axios.post(url)
    const res = orderList
    store.commit("updateOrder", res)
  },

  queryTrade () {
    // const url = config.domain + '/api/tradeinfo'
    // const res = await axios.post(url)
    const res = tradeList
    store.commit("updateTrade", res)
  },

  queryHisOrder () {
    // const url = config.domain + '/api/hisorderinfo'
    // const res = await axios.post(url)
    const res = hisOrderList
    store.commit("updateHisOrder", res)
  },

  queryHisTrade () {
    // const url = config.domain + '/api/histradeinfo'
    // const res = await axios.post(url)
    const res = hisTradeList
    store.commit("updateHisTrade", res)
  }
}

