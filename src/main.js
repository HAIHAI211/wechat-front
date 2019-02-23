import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './element-ui'
import './assets/style/app.scss'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
