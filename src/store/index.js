import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import interviewList from './modules/interviewList'
import CreateLogger from 'vuex/dist/logger'
Vue.use(Vuex)
export default new Vuex.Store({
  // 模块
  modules: {
    home,
    interviewList
  },
  //  插件
  plugins: [CreateLogger()]
})
