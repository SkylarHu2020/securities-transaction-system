import axios from 'axios'
import config from '../../config.js'

export default {
  async signIn (payload) {
    const url = config.domain + '/signIn'
    const res = await axios.post(url, {
      account: payload.account,
      password: payload.password,
      grandType: password
    })
    if (res.data.success) {
      sessionStorage.setItem('account', payload.account)
      sessionStorage.setItem('token', res.data.data.token)
      return res.data
    }
  }
}