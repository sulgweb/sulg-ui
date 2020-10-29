/*
 * @description: 
 * @author: 小羽
 * @github: https://github.com/sulgweb
 * @lastEditors: 小羽
 * @Date: 2020-10-26 23:52:29
 * @LastEditTime: 2020-10-29 11:40:21
 * @Copyright: 1.0.0
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'


import 'github-markdown-css/github-markdown.css'
//import './assets/md.less'

//icon字体库
//import "@/assets/iconfont/iconfont.css"

// 代码高亮的js
import hljs from 'highlight.js'
//import 'highlight.js/styles/docco.css' //样式文件
// 定义一个全局指令
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

import demoBlock from './components/demo-block.vue'
Vue.component('demo-block', demoBlock)
//引入SulgUI
import SulgUI from '~/index'
import '../packages/theme-default/lib/index.css'
Vue.use(SulgUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
