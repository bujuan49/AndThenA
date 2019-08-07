<<<<<<< HEAD
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
=======
import Vue from 'vue'
import App from './App'
import store from "./store"
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()
>>>>>>> whp
