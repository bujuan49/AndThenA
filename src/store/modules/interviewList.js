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
    let data = await sign(payload)
    console.log(data.data)
    context.commit('setState', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
