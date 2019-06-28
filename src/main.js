import Vue from 'vue'
import ElementUI from 'element-ui'

import router from './router/router'
import './theme/index.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
