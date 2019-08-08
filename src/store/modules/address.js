// 引入SDK核心类
import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js'

const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
})
const state = {
  addresslist: []
} 
const mutations = {
  getAddresslist (state, payload) {
    state.addresslist = payload.data
  }
}
// 模块内的异步改变
const actions = {
  getSuggestion ({ commit }, payload) {
    qqMapSdk.getSuggestion({
      keyword: payload,
      success (res) {
        commit('getAddresslist', res)
      }
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
