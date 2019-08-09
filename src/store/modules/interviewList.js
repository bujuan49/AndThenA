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
    // console.log('...state', state, data)
  },
  newState (state, data) { // xq
    state.typeAll = data
  },
  jsonAdres (state, data) {
    console.log(state, '1')
  }
}

// 模块内的异步改变
const actions = {
  async getState (context, payload) {
    if (payload.text === '全部') {
      console.log('All')
      let data = await sign()
      context.commit('setState', data.data)
    } else if (payload.text === '未开始') {
      let data = await sign(-1)
      context.commit('setState', data.data)
    } else if (payload.text === '已开始') {
      console.log('start')
      let data = await sign(0)
      context.commit('setState', data.data)
    } else {
      console.log(2)
      // let data = await sign(1)
      // context.commit('setState', data.data)
    }
  },
  async changeSign (context, payload) { // 更新
    let data = await changeSign(payload)
    console.log(data)
  },
  async details (context, payload) { // 获取详情
    let data = await newSign(payload)
    context.commit('newState', data.data)
  },
  async strAddress (context, payload) { // 改变地址的json
    console.log(payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
