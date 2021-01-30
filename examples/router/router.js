import Vue from 'vue'
import VueRouter from 'vue-router'


let baseRoutes = []
let files = require.context('@/docs/base', true, /\.md$/)

files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.md)/g, '')
    let data = {
      path:newKey,
      name:newKey,
      component:()=>import(`@/docs/base/${newKey}.md`)
    }
    baseRoutes.push(data)
})
console.log("baseRoutes", baseRoutes)

//路由统一注册
Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  base:process.env.VUE_APP_BASEROUTER,
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
          path: 'install',
          name: "install",
          component: () => import('@/docs/install.md')
        },
        {
          path: 'start',
          name: "start",
          component: () => import('@/docs/start.md')
        },
        ...baseRoutes
        /* {
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
        },
        {
          path: 'switch',
          name: 'switch',
          component: () => import('@/docs/switch.md')
        } */
      ]
    },
    /* {
      path: '/button',
      name: 'button',
      component: () => import('@/docs/button.md')
    } */
  ]
})