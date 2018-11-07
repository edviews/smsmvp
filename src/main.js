import Vue from 'vue'
import iView from 'iview'
import faker from 'faker'
import 'iview/dist/styles/iview.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(faker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
