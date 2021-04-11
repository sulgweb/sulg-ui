<!--
 * @description: 
 * @author: 小羽
 * @Date: 2021-03-14 14:31:24
 * @LastEditTime: 2021-04-11 11:23:12
 * @Copyright: 1.0.0
-->

<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# 文本按行省略
----
### 文字阴影/立体效果

需要传入 `type:'shadow'` , `value:3` , `shadowColor:'#a8a8a8'` (类型，阴影层数，阴影色)

<div class="demo-block">
  <div v-su-font="{value:3,type:'shadow',shadowColor:'#a8a8a8'}" style="font-size:36px;font-weight:600">
    SULG UI
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div v-su-font="{value:3,type:'shadow'}" style="font-size:36px;font-weight:600">
      SULG UI
    </div>
  </div>
</template>

```
:::

### 氖光效果

通常运用氖光效果时，背景底色都是偏黑色。
需要传入 `type:'neon'` 和 `shadowColor:'#0ebeff'` (类型，阴影色)

<div class="demo-block">
  <div style="background:#000;color:#fff;height:100px;width:100%;font-size:60px;overflow:hidden;text-align:center;'">
    <div v-su-font="{shadowColor:'#0ebeff',type:'neon'}" style="font-weight:blod;">
      SULG UI
    </div>
  </div>
  
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div style="background:#000;color:#fff;height:100px;width:100%;font-size:60px;overflow:hidden;text-align:center;'">
      <div v-su-font="{shadowColor:'#0ebeff',type:'neon'}" style="font-weight:blod;">
        SULG UI
      </div>
    </div>
  </div>
</template>

```
:::

### 镂空效果

文字镂空效果，即留下边框，其余部分删除。
需要传入 `type:'hollowOut`,`color:'#707AE4'`,`line:'2px'`' (类型，颜色，边框大小)

<div class="demo-block">
  <div style="background:#000;height:100px;width:100%;font-size:60px;text-align:center;'">
    <div v-su-font="{color:'#707AE4',line:'2px',type:'hollowOut'}" style="font-weight:blod;">
      SULG UI
    </div>
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div style="background:#000;height:100px;width:100%;font-size:60px;text-align:center;'">
      <div v-su-font="{color:'#707AE4',line:'2px',type:'hollowOut'}" style="font-weight:blod;">
        SULG UI
      </div>
    </div>
  </div>
</template>

```
:::



### 打字机效果

打字机效果。
需要传入 `type:'hollowOut`,`color:'#707AE4'`,`line:'2px'`' (类型，颜色，边框大小)

<div class="demo-block">
  <div>
    <div v-su-font="{value:'SULG UI的核心想法是想教大家如何搭建一个基于Vue的组件库。市面上已经有很多成熟的中后台组件库，比如element-ui和iview。这个组件库也是由SULG团队维护开发，但不建议使用到生产环境，如果有兴趣，可以fork下来作为自己技术探索的一个部分。感谢大家的支持~',type:'typer'}">
    </div>
  </div>
</div>

::: demo
```html

<template>
  <div class="demo-block">
    <div>
      <div v-su-font="{value:'SULG UI的核心想法是想教大家如何搭建一个基于Vue的组件库。市面上已经有很多成熟的中后台组件库，比如element-ui和iview。这个组件库也是由SULG团队维护开发，但不建议使用到生产环境，如果有兴趣，可以fork下来作为自己技术探索的一个部分。感谢大家的支持~',type:'typer'}">
      </div>
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


