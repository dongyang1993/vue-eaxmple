import Vue from 'vue'
import ElementUI from 'element-ui'

import router from './router/router'
import store from './store/index'
import './theme/index.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
