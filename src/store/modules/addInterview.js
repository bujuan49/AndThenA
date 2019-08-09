import { addSign } from '../../service/index'
const state = {
  message: '',
  current: {
    company: '',
    phone: '',
    address: '',
    description: ''
  }
}
const mutations = {

}
// 模块内的异步改变
const actions = {
  async submit (state, { ...payload }) {
    return new Promise(async (resolve, reject) => {
      let result = await addSign(payload)
      resolve(result)
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}