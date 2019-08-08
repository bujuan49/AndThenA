// 模块所有的状态
const state = {
  longitude: '113.324520',
  latitude: '23.099994'
}

// 模块内的同步改变
const mutations = {
  updateLocation (state, payload) {
    state.longitude = payload.longitude
    state.latitude = payload.latitude
  }
}

// 模块内的异步改变
const actions = {
  getLocation ({ commit }, payload) {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        commit('updateLocation', res)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
