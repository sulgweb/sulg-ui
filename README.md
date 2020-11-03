<p align="center">
  <a href="https://ui.sulg.top">
    <img width="200" src="https://gitee.com/xiaoyu-web/img-sed/raw/master/images/logo.jpg">
  </a>
</p>

# 公告
这个 `UI`库的核心想法是想教大家如何搭建一个基于`Vue`的组件库。市面上已经有很多成熟的中后台组件库，比如`element-ui`和`iview`。这个组件库也是由我一个人维护开发，不建议使用到生产环境，如果有兴趣，可以`fork`下来作为自己技术探索的一个部分。感谢大家的支持~

# SULG UI

`SULG-UI` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品
[演示地址](https://ui.sulg.top)


## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

## 安装

- yarn

```bash
yarn add sulg-ui
```

- npm 

```bash
npm install sulg-ui --save
```

## 使用

```js
import SulgUi from "sulg-ui" // 引入组件库
import "sulg-ui/packages/theme-default/lib/index.css" // 引入样式库
Vue.use(SulgUi)
```

