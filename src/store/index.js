import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import CreateLogger from 'vuex/dist/logger'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home
  },
  plugins: [CreateLogger()]
})
