import {decrypt, fingerPrint} from '../../service/index'
const state = {
  phone: null
}
const mutations = {
  phone (state, item) {
    state.phone = item.substr(0, 3) + '****' + item.substr(7)
  }
}
// 模块内的异步改变
const actions = {
  async decrypt (context, payload) {
    let data = await decrypt(payload)
    console.log(data.data.phoneNumber)
    context.commit('phone', data.data.phoneNumber)
  },
  async fingerPrint (context, payload) {
    await fingerPrint(payload)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
