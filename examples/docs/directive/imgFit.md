<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-03-01 09:45:02
 * @LastEditTime: 2021-03-01 10:00:22
 * @Copyright: 1.0.0
-->
<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 图片自适应
----
### 基础用法

一般在开发中，我们设置了 `img` 标签的 `width` 和 `height` 后，图片可能会发生不同程度的拉伸，从而导致图片发生变型、模糊等问题。在 `SULG UI` 框架中我们只需要添加 `v-su-img-fit` 指令即可完成适配。

<div class="demo-block">
  <div>
    <div>未调用v-su-img-fit指令</div>
    <img style="width:100px;height:200px" src = "https://gitee.com/xiaoyu-web/img-sed/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200505000654.jpg"/>
  </div>
  <div>
    <div>调用v-su-img-fit指令</div>
    <img v-su-img-fit style="width:100px;height:200px" src = "https://gitee.com/xiaoyu-web/img-sed/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200505000654.jpg"/>
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div>
    <div>未调用v-su-img-fit指令</div>
      <img style="width:100px;height:200px" src = "https://gitee.com/xiaoyu-web/img-sed/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200505000654.jpg"/>
    </div>
    <div>
      <div>调用v-su-img-fit指令</div>
      <img v-su-img-fit style="width:100px;height:200px" src = "https://gitee.com/xiaoyu-web/img-sed/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200505000654.jpg"/>
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


