<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-02-10 10:28:33
 * @LastEditTime: 2021-04-11 11:42:53
 * @Copyright: 1.0.0
-->
<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 文本按行省略
----
### 基础用法

只需要绑定行数即可，默认为1行。

<div class="demo-block">
  <div v-su-line-clamp="1">
    SULG UI的核心想法是想教大家如何搭建一个基于Vue的组件库。市面上已经有很多成熟的中后台组件库，比如element-ui和iview。这个组件库也是由SULG团队维护开发，但不建议使用到生产环境，如果有兴趣，可以fork下来作为自己技术探索的一个部分。感谢大家的支持~
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div v-su-line-clamp="1">
     SULG UI的核心想法是想教大家如何搭建一个基于Vue的组件库。市面上已经有很多成熟的中后台组件库，比如element-ui和iview。这个组件库也是由SULG团队维护开发，但不建议使用到生产环境，如果有兴趣，可以fork下来作为自己技术探索的一个部分。感谢大家的支持~
    </div>
  </div>
</template>

```
:::




<!-- 
## 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| amount | 显示的数字（必须） | Number | — |  |
| time | 持续时间 | Number | — | 1000 |
| start | 开始变化 | Boolean | — | true |
| thousand | 千分位 | Boolean | — | false | -->


