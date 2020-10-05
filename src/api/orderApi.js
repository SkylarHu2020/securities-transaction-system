import axios from 'axios'
import config from '../../config.js'

import store from 'src/store'

export default {
  queryBalance () {
    const url = config.domain + '/api/balance'
    const res = await axios.post(url)
    store.commit("updateBalance", res)
  },

  queryPosi () {
    const url = config.domain + '/api/posiinfo'
    const res = await axios.post(url)
    store.commit("updatePosiInfo", res)
  },

  queryOrder () {
    const url = config.domain + '/api/orderinfo'
    const res = await axios.post(url)
    store.commit("updateOrder", res)
  },

  queryTrade () {
    const url = config.domain + '/api/tradeinfo'
    const res = await axios.post(url)
    store.commit("updateTrade", res)
  },
}