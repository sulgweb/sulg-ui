import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import 'github-markdown-css/github-markdown.css'

import SulgUI from '~/index'
Vue.use(SulgUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
