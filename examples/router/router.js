import Vue from 'vue'
import VueRouter from 'vue-router'

//路由统一注册
Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [{
    path: '/test',
    name: 'test',
    component: () => import('@/docs/test.md')
  }]
})