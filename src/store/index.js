import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import address from './modules/address'
import addInterview from './modules/addInterview'
import interviewList from './modules/interviewList'
import CreateLogger from 'vuex/dist/logger'
Vue.use(Vuex)
export default new Vuex.Store({
  // 模块
  modules: {
    home,
    address,
    addInterview,
    interviewList
  },
  //  插件
  plugins: [CreateLogger()]
})
