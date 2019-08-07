// 模块所有的状态
import { sign } from '../../service/index'
const state = {
  // 全部数据
  listAll: null
}

// 模块内的同步改变
const mutations = {
  setState (state, data) {
    state.listAll = data
    // console.log('...state', state, data)
  }
}

// 模块内的异步改变
const actions = {
  async getState (context, payload) {
    if (payload.text === '全部') {
      let data = await sign(1)
      context.commit('setState', data.data)
    } else if (payload.text === '未开始') {
      let data = await sign()
      context.commit('setState', data.data)
    } else if (payload.text === '已放弃') {
      let data = await sign(-1)
      context.commit('setState', data.data)
    } else if (payload.text === '已打卡') {
      let data = await sign(0)
      context.commit('setState', data.data)
    } else {
      let data = await sign()
      context.commit('setState', data.data)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
