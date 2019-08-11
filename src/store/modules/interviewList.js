// 模块所有的状态
import { sign, changeSign, newSign } from '../../service/index'
const state = {
  // 全部数据
  listAll: null,
  typeAll: null,
  detailsAll: null
}

// 模块内的同步改变
const mutations = {
  setState (state, data) {
    state.listAll = data
  },
  newState (state, data) { // xq
    state.typeAll = data
  }
}
// 模块内的异步改变
const actions = {
  async getState (context, payload) {
    if (payload.text === '全部') {
      let data = await sign()
      data.data.forEach(item => {
        if (item.address[0] === '{') {
          item.address = JSON.parse(item.address)
        }
        item.start_time = new Date(item.start_time * 1).toLocaleDateString()
      })
      context.commit('setState', data.data)
    } else if (payload.text === '未开始') {
      let data = await sign(-1)
      data.data.forEach(item => {
        if (item.address[0] === '{') {
          item.address = JSON.parse(item.address)
        }
        item.start_time = new Date(item.start_time * 1).toLocaleDateString()
      })
      context.commit('setState', data.data)
    } else if (payload.text === '已开始') {
      let data = await sign(0)
      data.data.forEach(item => {
        if (item.address[0] === '{') {
          item.address = JSON.parse(item.address)
        }
        item.start_time = new Date(item.start_time * 1).toLocaleDateString()
      })
      context.commit('setState', data.data)
    } else {
      let data = await sign(1)
      data.data.forEach(item => {
        if (item.address[0] === '{') {
          item.address = JSON.parse(item.address)
        }
        item.start_time = new Date(item.start_time * 1).toLocaleDateString()
      })
      context.commit('setState', data.data)
    }
  },
  async changeSign (context, payload) { // 更新
    await changeSign(payload)
  },
  async details (context, payload) { // 获取详情
    let data = await newSign(payload)
    data.data.start_time = new Date(data.data.start_time * 1).toLocaleDateString()
    context.commit('newState', data.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
