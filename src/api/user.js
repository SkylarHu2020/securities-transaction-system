import axios from 'axios'
import config from '../../config.js'

export default {
  signIn (payload) {
    const url = config.domain + '/signIn'
    // TODO: make a login request
    // const res = await axios.post(url, {
    //   account: payload.account,
    //   password: payload.password,
    //   grandType: password
    // })
    
    const fakeToken = 'sldkjfsdkf34k5lksdfklsdfjsg'
    sessionStorage.setItem('account', payload.account)
    sessionStorage.setItem('token', fakeToken)
  },

  passwordUpdate (payload) {
    const url = config.domain + '/updatePassword'
    // const res = await axios.post(url, {
    //   account: payload.account,
    //   oldPassword: payload.oldPassword,
    //   newPassword: payload.newPassword
    // })
    
    sessionStorage.removeItem('account')
    sessionStorage.removeItem('token')
  }
}