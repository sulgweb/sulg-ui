import Vue from 'vue'
import VueRouter from 'vue-router'

//路由统一注册
Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect:"/index",
    },
    {
      path: '/index',
      name: 'index',
      redirect: "index/introduce",
      component:()=>import("@/pages/index.vue"),
      children:[
        {
          path: 'introduce',
          name: 'introduce',
          component: () => import('@/docs/introduce.md')
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('@/docs/button.md')
        },
        {
          path: 'tag',
          name: 'tag',
          component: () => import('@/docs/tag.md')
        },
        {
          path: 'icon',
          name: 'icon',
          component: () => import('@/docs/icon.md')
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('@/docs/layout.md')
        }
      ]
    },
    /* {
      path: '/button',
      name: 'button',
      component: () => import('@/docs/button.md')
    } */
  ]
})