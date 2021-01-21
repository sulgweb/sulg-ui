
<template>
  <div class="side-nav">
    <div v-for="title in (Object.keys(data))" :key="title" class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="nav in data[title]" :key="nav.name" v-if="nav.desc">
        <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
        <p v-else class="side-nav-group">{{nav.desc}}</p>
        <div v-for="item in nav.items" :key="item.name">
          <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''" class="slid-nav-component">{{item.desc}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: {
          "开发指南": [
            {
              "name": "introduce",
              "path": "/introduce",
              "desc": "介绍"
            },
            {
              "name": "install",
              "path": "/install",
              "desc": "安装"
            },
            {
              "name": "start",
              "path": "/start",
              "desc": "快速开始"
            },
            /* {
              "name": "index",
              "path": "/",
              "type": "pages"
            },
            {
              "name": "logs",
              "path": "/logs",
              "desc": "更新日志"
            } */
          ],
          "组件": [
            {
              "desc": "基础组件",
              "path": "/component",
              "items": [
                {
                  "desc": "Layout 布局",
                  "name": "layout",
                  "path": "/layout"
                },
                {
                  "desc": "Icon 图标",
                  "name": "icon",
                  "path": "/icon"
                },
                {
                  "desc": "Button 按钮",
                  "name": "button",
                  "path": "/button"
                },
                {
                  "desc": "Tag 标签",
                  "name": "tag",
                  "path": "/tag"
                },
                {
                  "desc": "Switch 开关",
                  "name": "switch",
                  "path": "/switch"
                },
                {
                  "desc": "Modal模态框",
                  "name": "modal",
                  "path": "/modal"
                },
                {
                  "desc": "数字动画",
                  "name": "numAnimate",
                  "path": "/numAnimate"
                }
              ]
            },
            {
              "desc": "视图组件",
              "path": "/component",
              "items": [
                /* {
                  "desc": "Showmore 显示更多",
                  "name": "show-more",
                  "path": "/showMore"
                },
                {
                  "desc": "Limit 限制输入域",
                  "name": "limit-textarea",
                  "path": "/limit"
                },
                {
                  "desc": "metaInfo 三要素",
                  "name": "meta-info",
                  "path": "/meta-info"
                },
                {
                  "desc": "alert 警告",
                  "name": "alert",
                  "path": "/alert"
                },
                {
                  "desc": "LoadingBar 加载进度条",
                  "name": "loading-bar",
                  "path": "/loadingBar"
                },
                {
                  "desc": "skeleton 骨架屏",
                  "name": "skeleton",
                  "path": "/skeleton"
                } */
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .side-nav{
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3F536E;
    background-color: #fff;
    z-index: 99;
    .group-container{
      margin-bottom: 32px;
    }
    .side-nav-title{
      padding: 0 24px 8px;
      color: #8DABC4;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .side-nav-items{
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;
      a{
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;
      }
      .side-nav-group{
        display: block;
        position: relative;
        padding: 6px 0 6px 24px;
        color: #2C405A;
        font-weight: bold;
      }
      .slid-nav-component{
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #616367;
        font-size: 14px;
      }
      .active{
        color: #707AE4;
      }
    }
  }
</style>
