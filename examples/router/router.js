import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入基础组件
let baseRoutes = []
let baseFiles = require.context('@/docs/base', true, /\.md$/)
baseFiles.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.md)/g, '')
    let data = {
      path:newKey,
      name:newKey,
      component:()=>import(`@/docs/base/${newKey}.md`)
    }
    baseRoutes.push(data)
})

// 引入视图组件
let viewRoutes = []
let viewFiles = require.context('@/docs/view', true, /\.md$/)
viewFiles.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.md)/g, '')
    let data = {
      path:newKey,
      name:newKey,
      component:()=>import(`@/docs/view/${newKey}.md`)
    }
    viewRoutes.push(data)
})

// 引入指令
let directiveRoutes = []
let directiveFiles = require.context('@/docs/directive', true, /\.md$/)
directiveFiles.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.md)/g, '')
    let data = {
      path:newKey,
      name:newKey,
      component:()=>import(`@/docs/directive/${newKey}.md`)
    }
    directiveRoutes.push(data)
})

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
        ...baseRoutes,
        ...viewRoutes,
        ...directiveRoutes
      ]
    },
  ]
})