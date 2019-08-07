import Vue from 'vue'
import App from './App'
import store from './store/index'
import '../static/font/iconfont.css'
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()
